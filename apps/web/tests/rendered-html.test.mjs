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
  assert.match(html, /Full-stack web developer for practical business web apps/);
  assert.match(html, /Full-stack portfolio/);
  assert.match(html, /Self Employed/);
  assert.match(html, /Universitas Islam Kalimantan Muhammad Arsyad Al Banjari/);
  assert.match(html, /newcastlezzz900@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/ariza-naufal-kholish-1557772a5/);
  assert.match(html, />EN</);
  assert.match(html, />ID</);
  assert.match(html, /ServiceFlow/);
  assert.match(html, /Mini CRM/);
  assert.match(html, /AI Business Assistant/);
  assert.match(html, /service-booking-management-system\.vercel\.app/);
  assert.match(html, /mini-crm-opal-two\.vercel\.app/);
  assert.match(html, /ai-bisnis\.vercel\.app/);
  assert.match(html, /\/projects\/ariza-portfolio\.svg/);
  assert.match(html, /\/projects\/serviceflow-dashboard\.webp/);
  assert.match(html, /\/projects\/mini-crm-dashboard\.webp/);
  assert.match(html, /\/projects\/ai-business-assistant\.png/);
  assert.doesNotMatch(html, /Pustaka Banua Raya|Project Log|Next Project Slot|Project Showcase System/);
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
  assert.match(data, /Full-stack web developer untuk aplikasi web bisnis yang praktis/);
  assert.match(data, /experience:/);
  assert.match(data, /projects:/);
  assert.match(data, /ServiceFlow/);
  assert.match(data, /Mini CRM/);
  assert.match(data, /AI Business Assistant/);
  assert.match(data, /https:\/\/github\.com\/Antophic\/Mini-CRM/);
  assert.match(data, /https:\/\/github\.com\/Antophic\/SERVICE-BOOKING-MANAGEMENT-SYSTEM/);
  assert.match(data, /https:\/\/github\.com\/Antophic\/ai-bisnis/);
  assert.doesNotMatch(data, /Pustaka Banua Raya|projectLog:|Next Project Slot|Project Showcase System/);
  assert.match(data, /image:/);
  assert.match(page, /content\.projects\.items\.map/);
  assert.doesNotMatch(page, /content\.projects\.projectLog/);
  assert.match(page, /project\.image\.src/);
  assert.match(page, /project\.links\.map/);
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
    "ai-business-assistant.png",
    "ariza-portfolio.svg",
    "mini-crm-dashboard.webp",
    "serviceflow-dashboard.webp",
  ]);
});
