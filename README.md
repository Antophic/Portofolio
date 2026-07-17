# Antophic Portfolio

Website portofolio personal untuk Antophic. Konten utama dipisah dari layout
supaya gampang diedit tanpa perlu membongkar struktur halaman.

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

Edit file `app/portfolio-data.ts` untuk mengganti:

- nama, role, lokasi, dan kalimat hero
- link GitHub, repository, dan email kontak
- teks bahasa Inggris dan Bahasa Indonesia
- daftar kelebihan
- daftar skill
- daftar project
- alur kerja

Layout dan style utama ada di:

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## Struktur

- `app/portfolio-data.ts`: sumber konten yang paling aman untuk diedit
- `app/page.tsx`: struktur section dan mapping data
- `app/globals.css`: warna, spacing, responsif, dan visual identity
- `tests/rendered-html.test.mjs`: test render HTML setelah build

## Commands

```bash
npm run dev
npm run build
npm test
```
