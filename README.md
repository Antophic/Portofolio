# Antophic Portfolio

Website portofolio personal untuk Antophic dengan struktur monorepo. Aplikasi
web, konten portfolio, dan konfigurasi utama dipisah supaya lebih rapi dan
gampang dikembangkan.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

Preview lokal akan berjalan di `http://localhost:3000/`.

## Cara Edit Konten

Edit file `packages/portfolio-content/src/index.ts` untuk mengganti:

- nama, role, lokasi, dan kalimat hero
- link GitHub, repository, dan email kontak
- teks bahasa Inggris dan Bahasa Indonesia
- daftar kelebihan
- daftar skill
- daftar project
- alur kerja

Layout dan style utama ada di:

- `apps/web/app/page.tsx`
- `apps/web/app/globals.css`
- `apps/web/app/layout.tsx`

## Struktur

- `apps/web`: aplikasi portfolio yang di-deploy
- `apps/web/app`: halaman, layout, dan style website
- `apps/web/public`: asset public seperti favicon dan Open Graph image
- `packages/portfolio-content`: data portfolio bilingual yang paling aman diedit
- `apps/web/tests/rendered-html.test.mjs`: test render HTML setelah build
- `tsconfig.base.json`: konfigurasi TypeScript bersama
- `package.json`: script utama dan daftar workspace monorepo

## Commands

```bash
npm run dev
npm run build
npm test
```
