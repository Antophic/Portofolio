export const portfolio = {
  name: "Ariza",
  role: "Frontend Developer",
  specialty: "UI Engineering & Responsive Web",
  location: "Indonesia",
  avatar: "https://avatars.githubusercontent.com/u/245324916?v=4",
  description:
    "Ariza is a frontend developer focused on accessible, polished, and maintainable web interfaces.",
  contact: {
    email: "newcastlezzz900@gmail.com",
    href: "mailto:newcastlezzz900@gmail.com",
  },
  links: [
    { label: "GitHub", href: "https://github.com/Antophic" },
    { label: "Repository", href: "https://github.com/Antophic/Portofolio" },
  ],
  languages: {
    en: {
      label: "EN",
      ariaLabel: "Switch to English",
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      eyebrow: "Frontend portfolio",
      headline: "I build web interfaces that feel precise, fast, and trustworthy.",
      subheadline:
        "A frontend developer focused on turning product ideas into responsive websites with clear structure, calm visuals, and clean implementation.",
      contactLabel: "Get in touch",
      resumeLabel: "View work",
      status: "Available for selected projects",
      statusNote: "Focused on portfolios, landing pages, and product interfaces.",
      profile: {
        locationLabel: "Location",
        focusLabel: "Focus",
        stackLabel: "Core stack",
      },
      stats: [
        { value: "01", label: "Design-aware frontend" },
        { value: "02", label: "Responsive from the first pass" },
        { value: "03", label: "Clean handoff-ready structure" },
      ],
      about: {
        kicker: "About",
        title: "I care about the details people feel before they notice.",
        paragraphs: [
          "I work at the intersection of layout, interaction, and frontend implementation. My goal is to make each page feel intentional: easy to scan, comfortable to use, and convincing enough to share.",
          "I keep the codebase organized around editable content and reusable sections, so the website can grow without becoming hard to maintain.",
        ],
      },
      strengths: [
        {
          title: "Visual judgment",
          body: "Hierarchy, spacing, contrast, and rhythm are treated as product decisions, not decoration.",
        },
        {
          title: "Frontend clarity",
          body: "Components and data are separated so copy, projects, and skills stay simple to update.",
        },
        {
          title: "Mobile discipline",
          body: "Small screens are designed intentionally, with readable type, reachable actions, and stable layouts.",
        },
      ],
      experience: {
        kicker: "Experience",
        title: "A practical frontend workflow for polished web projects.",
        items: [
          {
            period: "2026 - Present",
            role: "Frontend Developer",
            company: "Independent Projects",
            summary:
              "Build portfolio websites, landing pages, and focused product interfaces with responsive layouts, bilingual content, and clear handoff documentation.",
            tags: ["React", "Next.js", "TypeScript", "Responsive UI"],
          },
          {
            period: "2026",
            role: "UI Implementation",
            company: "Portfolio Systems",
            summary:
              "Create reusable section structures, content-driven pages, and professional visual systems that stay easy to edit after launch.",
            tags: ["Component Structure", "Content Data", "Accessibility"],
          },
          {
            period: "2026",
            role: "Developer Handoff",
            company: "GitHub Workflow",
            summary:
              "Organize repositories, README notes, and deployment-ready builds so projects are easier to continue and present.",
            tags: ["GitHub", "Documentation", "Deployment"],
          },
        ],
      },
      projects: {
        kicker: "Projects",
        title: "Projects I have worked on.",
        body: "A dedicated place for personal builds, client websites, experiments, and every project that deserves to be presented clearly.",
        items: [
          {
            title: "Ariza Portfolio",
            type: "Personal Website",
            year: "2026",
            summary:
              "A bilingual portfolio website with a monorepo structure, scroll interactions, polished dark visuals, and content that stays easy to update.",
            result: "A professional home for profile, skills, projects, and contact.",
            tags: ["Next.js", "TypeScript", "Monorepo"],
            image: {
              src: "/projects/ariza-portfolio.svg",
              alt: "Preview image for the Ariza Portfolio project",
            },
          },
          {
            title: "Pustaka Banua Raya Website",
            type: "Business Website",
            year: "2026",
            summary:
              "A website foundation for a business domain, prepared so the brand can have a cleaner public presence and room to grow.",
            result: "Clearer digital presence for a real-world business project.",
            tags: ["Domain Setup", "Web Presence", "Hosting"],
            image: {
              src: "/projects/pustaka-banua-raya.svg",
              alt: "Preview image for the Pustaka Banua Raya website project",
            },
          },
          {
            title: "Project Showcase System",
            type: "Portfolio Feature",
            year: "2026",
            summary:
              "A structured project section built around title, category, status, role, summary, result, and stack so future work can be added neatly.",
            result: "A cleaner place to document everything I build next.",
            tags: ["Content Data", "Project Log", "Case Study"],
            image: {
              src: "/projects/project-showcase.svg",
              alt: "Preview image for the project showcase system",
            },
          },
        ],
        projectLog: {
          kicker: "Project Log",
          title: "A clear place for every project I add next.",
          body: "Each entry can show the project name, role, current status, short context, and the tools used.",
          items: [
            {
              name: "Ariza Portfolio",
              category: "Personal Portfolio",
              status: "Live",
              role: "Design + Frontend",
              summary:
                "A professional portfolio website with English and Indonesian copy, responsive layout, project sections, GitHub profile image, and polished scroll effects.",
              stack: ["Next.js", "React", "TypeScript", "CSS"],
              image: {
                src: "/projects/ariza-portfolio.svg",
                alt: "Thumbnail image for the Ariza Portfolio project",
              },
            },
            {
              name: "Pustaka Banua Raya Website",
              category: "Business Website",
              status: "Planning",
              role: "Website Setup",
              summary:
                "A business website project prepared around domain setup, hosting decisions, and a cleaner public-facing structure.",
              stack: ["Domain", "Hosting", "Website Structure"],
              image: {
                src: "/projects/pustaka-banua-raya.svg",
                alt: "Thumbnail image for the Pustaka Banua Raya website project",
              },
            },
            {
              name: "Next Project Slot",
              category: "Open Entry",
              status: "Ready",
              role: "Project Documentation",
              summary:
                "A reserved entry for the next project, ready to be replaced with real work, links, stack, and a short result.",
              stack: ["Project Notes", "Case Study", "Links"],
              image: {
                src: "/projects/project-showcase.svg",
                alt: "Thumbnail image for the next project slot",
              },
            },
          ],
        },
      },
      skills: {
        kicker: "Skills",
        title: "Tools and habits behind the work.",
        groups: [
          {
            group: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
          },
          {
            group: "Interface Quality",
            items: ["Accessibility", "Design Systems", "Interaction States", "Microcopy", "Layout Rhythm"],
          },
          {
            group: "Workflow",
            items: ["GitHub", "Clean Code", "Performance Pass", "Content Structure", "Documentation"],
          },
        ],
      },
      process: {
        kicker: "Process",
        title: "How I move from idea to a website that feels ready.",
        steps: [
          {
            step: "01",
            title: "Clarify",
            body: "Define the page goal, target visitor, and message that must be obvious from the first screen.",
          },
          {
            step: "02",
            title: "Structure",
            body: "Turn the content into a readable flow with section hierarchy, actions, and responsive behavior.",
          },
          {
            step: "03",
            title: "Build",
            body: "Implement the interface with clean components, editable data, and production-ready styling.",
          },
        ],
      },
      contact: {
        kicker: "Contact",
        title: "Let's build something polished enough to share.",
        body: "Reach out if you need a portfolio, landing page, or web interface that feels professional, fast, and easy to maintain.",
        button: "Send email",
      },
    },
    id: {
      label: "ID",
      ariaLabel: "Ganti ke Bahasa Indonesia",
      nav: {
        about: "Tentang",
        experience: "Pengalaman",
        projects: "Proyek",
        contact: "Kontak",
      },
      eyebrow: "Portofolio frontend",
      headline: "Saya membangun interface web yang presisi, cepat, dan mudah dipercaya.",
      subheadline:
        "Frontend developer yang fokus mengubah ide produk menjadi website responsif dengan struktur jelas, visual tenang, dan implementasi rapi.",
      contactLabel: "Hubungi saya",
      resumeLabel: "Lihat karya",
      status: "Terbuka untuk project pilihan",
      statusNote: "Fokus pada portfolio, landing page, dan product interface.",
      profile: {
        locationLabel: "Lokasi",
        focusLabel: "Fokus",
        stackLabel: "Stack utama",
      },
      stats: [
        { value: "01", label: "Frontend dengan rasa desain" },
        { value: "02", label: "Responsif sejak awal" },
        { value: "03", label: "Struktur siap handoff" },
      ],
      about: {
        kicker: "Tentang",
        title: "Saya peduli pada detail yang terasa sebelum disadari.",
        paragraphs: [
          "Saya bekerja di antara layout, interaksi, dan implementasi frontend. Tujuannya membuat setiap halaman terasa punya arah: mudah discan, nyaman dipakai, dan cukup meyakinkan untuk dibagikan.",
          "Saya menjaga kode tetap terstruktur dengan konten yang mudah diedit dan section yang bisa dikembangkan, supaya website tidak cepat sulit dirawat.",
        ],
      },
      strengths: [
        {
          title: "Rasa visual",
          body: "Hirarki, spacing, kontras, dan ritme diperlakukan sebagai keputusan produk, bukan dekorasi.",
        },
        {
          title: "Frontend yang jelas",
          body: "Komponen dan data dipisah supaya copy, project, dan skill mudah diperbarui.",
        },
        {
          title: "Mobile yang serius",
          body: "Layar kecil dirancang dengan teks terbaca, aksi jelas, dan layout yang stabil.",
        },
      ],
      experience: {
        kicker: "Pengalaman",
        title: "Workflow frontend praktis untuk project web yang polished.",
        items: [
          {
            period: "2026 - Sekarang",
            role: "Frontend Developer",
            company: "Independent Projects",
            summary:
              "Membangun portfolio, landing page, dan product interface dengan layout responsif, konten bilingual, dan dokumentasi handoff yang jelas.",
            tags: ["React", "Next.js", "TypeScript", "Responsive UI"],
          },
          {
            period: "2026",
            role: "UI Implementation",
            company: "Portfolio Systems",
            summary:
              "Membuat struktur section reusable, halaman berbasis konten, dan sistem visual profesional yang tetap mudah diedit setelah launch.",
            tags: ["Component Structure", "Content Data", "Accessibility"],
          },
          {
            period: "2026",
            role: "Developer Handoff",
            company: "GitHub Workflow",
            summary:
              "Merapikan repository, README, dan build siap deploy supaya project mudah dilanjutkan dan dipresentasikan.",
            tags: ["GitHub", "Documentation", "Deployment"],
          },
        ],
      },
      projects: {
        kicker: "Proyek",
        title: "Project yang pernah saya kerjakan.",
        body: "Tempat khusus untuk menampilkan personal build, website klien, eksperimen, dan setiap project yang perlu dipresentasikan dengan jelas.",
        items: [
          {
            title: "Ariza Portfolio",
            type: "Website Pribadi",
            year: "2026",
            summary:
              "Website portfolio bilingual dengan struktur monorepo, efek scroll, visual dark yang rapi, dan konten yang mudah diperbarui.",
            result: "Rumah profesional untuk profil, skill, project, dan kontak.",
            tags: ["Next.js", "TypeScript", "Monorepo"],
            image: {
              src: "/projects/ariza-portfolio.svg",
              alt: "Gambar preview untuk project Ariza Portfolio",
            },
          },
          {
            title: "Pustaka Banua Raya Website",
            type: "Website Bisnis",
            year: "2026",
            summary:
              "Fondasi website untuk domain bisnis, disiapkan supaya brand punya tampilan publik yang lebih bersih dan bisa dikembangkan.",
            result: "Digital presence yang lebih jelas untuk project bisnis nyata.",
            tags: ["Domain Setup", "Web Presence", "Hosting"],
            image: {
              src: "/projects/pustaka-banua-raya.svg",
              alt: "Gambar preview untuk project website Pustaka Banua Raya",
            },
          },
          {
            title: "Project Showcase System",
            type: "Fitur Portfolio",
            year: "2026",
            summary:
              "Section project yang dibuat terstruktur dengan judul, kategori, status, role, ringkasan, hasil, dan stack agar project berikutnya mudah ditambahkan.",
            result: "Tempat yang lebih rapi untuk mendokumentasikan semua karya berikutnya.",
            tags: ["Content Data", "Project Log", "Case Study"],
            image: {
              src: "/projects/project-showcase.svg",
              alt: "Gambar preview untuk sistem showcase project",
            },
          },
        ],
        projectLog: {
          kicker: "Project Log",
          title: "Tempat jelas untuk setiap project yang saya tambahkan.",
          body: "Setiap entry bisa menampilkan nama project, role, status, konteks singkat, dan tools yang digunakan.",
          items: [
            {
              name: "Ariza Portfolio",
              category: "Portfolio Pribadi",
              status: "Live",
              role: "Design + Frontend",
              summary:
                "Website portfolio profesional dengan copy English dan Indonesia, layout responsif, section project, foto profil GitHub, dan efek scroll yang halus.",
              stack: ["Next.js", "React", "TypeScript", "CSS"],
              image: {
                src: "/projects/ariza-portfolio.svg",
                alt: "Thumbnail untuk project Ariza Portfolio",
              },
            },
            {
              name: "Pustaka Banua Raya Website",
              category: "Website Bisnis",
              status: "Planning",
              role: "Website Setup",
              summary:
                "Project website bisnis yang disiapkan dari domain, keputusan hosting, dan struktur tampilan publik yang lebih rapi.",
              stack: ["Domain", "Hosting", "Website Structure"],
              image: {
                src: "/projects/pustaka-banua-raya.svg",
                alt: "Thumbnail untuk project website Pustaka Banua Raya",
              },
            },
            {
              name: "Next Project Slot",
              category: "Entry Terbuka",
              status: "Ready",
              role: "Project Documentation",
              summary:
                "Slot untuk project berikutnya, siap diganti dengan karya nyata, link, stack, dan hasil singkat.",
              stack: ["Project Notes", "Case Study", "Links"],
              image: {
                src: "/projects/project-showcase.svg",
                alt: "Thumbnail untuk slot project berikutnya",
              },
            },
          ],
        },
      },
      skills: {
        kicker: "Skill",
        title: "Tools dan kebiasaan kerja di balik hasilnya.",
        groups: [
          {
            group: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
          },
          {
            group: "Kualitas Interface",
            items: ["Accessibility", "Design Systems", "Interaction States", "Microcopy", "Layout Rhythm"],
          },
          {
            group: "Workflow",
            items: ["GitHub", "Clean Code", "Performance Pass", "Content Structure", "Documentation"],
          },
        ],
      },
      process: {
        kicker: "Proses",
        title: "Cara saya mengubah ide menjadi website yang siap dibagikan.",
        steps: [
          {
            step: "01",
            title: "Clarify",
            body: "Menentukan tujuan halaman, target pengunjung, dan pesan yang harus jelas sejak layar pertama.",
          },
          {
            step: "02",
            title: "Structure",
            body: "Mengubah konten menjadi flow yang mudah dibaca dengan hirarki section, aksi, dan perilaku responsif.",
          },
          {
            step: "03",
            title: "Build",
            body: "Mengimplementasikan interface dengan komponen rapi, data mudah diedit, dan styling siap produksi.",
          },
        ],
      },
      contact: {
        kicker: "Kontak",
        title: "Mari bangun sesuatu yang cukup rapi untuk dibagikan.",
        body: "Hubungi saya kalau kamu butuh portfolio, landing page, atau interface web yang terasa profesional, cepat, dan mudah dirawat.",
        button: "Kirim email",
      },
    },
  },
} as const;
