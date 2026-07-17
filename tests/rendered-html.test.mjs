import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Antophic portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Antophic/);
  assert.match(html, /I build modern websites/);
  assert.match(html, /Professional Portfolio/);
  assert.match(html, /newcastlezzz900@gmail\.com/);
  assert.match(html, />EN</);
  assert.match(html, />ID</);
  assert.match(html, /PulseBoard/);
  assert.match(html, /Repo Cleanup Kit/);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview/);
});

test("keeps portfolio content easy to edit", async () => {
  const [data, page, layout, packageJson, files] = await Promise.all([
    readFile(new URL("../app/portfolio-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(new URL("../app/", import.meta.url)),
  ]);

  assert.match(data, /export const portfolio/);
  assert.match(data, /languages:/);
  assert.match(data, /Saya membangun website modern/);
  assert.match(data, /skillsList:/);
  assert.match(data, /projects:/);
  assert.match(page, /content\.projects\.map/);
  assert.match(page, /useState<Language>\("en"\)/);
  assert.match(page, /className="brand-avatar"/);
  assert.doesNotMatch(page, /portfolio\.initials/);
  assert.match(layout, /generateMetadata/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.ok(!files.includes("_sites-preview"));
});
