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

test("server-renders the Ariza portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Ariza Naufal Kholish/);
  assert.match(html, /I build business web apps/);
  assert.match(html, /Full-stack portfolio/);
  assert.match(html, /Self Employed/);
  assert.match(html, /Universitas Islam Kalimantan Muhammad Arsyad Al Banjari/);
  assert.match(html, /newcastlezzz900@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/ariza-naufal-kholish-1557772a5/);
  assert.match(html, />EN</);
  assert.match(html, />ID</);
  assert.match(html, /Pustaka Banua Raya Website/);
  assert.match(html, /\/projects\/ariza-portfolio\.svg/);
  assert.match(html, /\/projects\/pustaka-banua-raya\.svg/);
  assert.doesNotMatch(html, /Project Log|Next Project Slot|Project Showcase System/);
  assert.match(html, /Profile/);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview/);
});

test("keeps portfolio content easy to edit", async () => {
  const [data, page, layout, packageJson, files, projectImages] = await Promise.all([
    readFile(
      new URL("../../../packages/portfolio-content/src/index.ts", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(new URL("../app/", import.meta.url)),
    readdir(new URL("../public/projects/", import.meta.url)),
  ]);

  assert.match(data, /export const portfolio/);
  assert.match(data, /name: "Ariza Naufal Kholish"/);
  assert.match(data, /languages:/);
  assert.match(data, /Saya membangun aplikasi web bisnis/);
  assert.match(data, /experience:/);
  assert.match(data, /projects:/);
  assert.doesNotMatch(data, /projectLog:|Next Project Slot|Project Showcase System/);
  assert.match(data, /image:/);
  assert.match(page, /content\.projects\.items\.map/);
  assert.doesNotMatch(page, /content\.projects\.projectLog/);
  assert.match(page, /project\.image\.src/);
  assert.doesNotMatch(page, /project-log-thumb/);
  assert.match(page, /content\.experience\.items\.map/);
  assert.match(page, /useState<Language>\("en"\)/);
  assert.match(page, /IntersectionObserver/);
  assert.match(page, /scroll-progress/);
  assert.match(page, /data-reveal/);
  assert.match(page, /className="brand-avatar"/);
  assert.doesNotMatch(page, /portfolio\.initials/);
  assert.match(layout, /generateMetadata/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.ok(!files.includes("_sites-preview"));
  assert.deepEqual(projectImages.sort(), [
    "ariza-portfolio.svg",
    "pustaka-banua-raya.svg",
  ]);
});
