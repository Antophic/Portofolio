export const portfolio = {
  name: "Ariza Naufal Kholish",
  role: "Full-Stack Web Developer",
  specialty: "React, TypeScript & Node.js",
  location: "Banjarbaru, Indonesia",
  avatar: "https://avatars.githubusercontent.com/u/245324916?v=4",
  description:
    "Ariza Naufal Kholish is a full-stack web developer building business web apps with React, TypeScript, Node.js, and modern deployment workflows.",
  contact: {
    email: "newcastlezzz900@gmail.com",
    href: "mailto:newcastlezzz900@gmail.com",
  },
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ariza-naufal-kholish-1557772a5/" },
    { label: "GitHub", href: "https://github.com/Antophic" },
    { label: "Repository", href: "https://github.com/Antophic/Portofolio" },
  ],
  languages: {
    en: {
      label: "EN",
      ariaLabel: "Switch to English",
      nav: {
        about: "About",
        experience: "Profile",
        projects: "Projects",
        contact: "Contact",
      },
      eyebrow: "Full-stack portfolio",
      headline: "Full-stack web developer for practical business web apps.",
      subheadline:
        "I build responsive products with React, TypeScript, Node.js, and database-backed workflows, including CRM, service booking, AI assistant, and portfolio projects.",
      contactLabel: "Get in touch",
      resumeLabel: "View projects",
      status: "Self Employed",
      statusNote: "React, TypeScript, Node.js | Business Web Apps",
      profile: {
        locationLabel: "Location",
        focusLabel: "Focus",
        stackLabel: "Core stack",
      },
      stats: [
        { value: "03", label: "Live business projects" },
        { value: "FS", label: "Full-stack implementation" },
        { value: "UI", label: "Responsive product interfaces" },
      ],
      about: {
        kicker: "About",
        title: "I build practical web apps backed by real product workflows.",
        paragraphs: [
          "My current profile is full-stack web development for business applications. I work across frontend, backend, authentication, database flow, and deployment so each project can be tried as a working product.",
          "Recent projects include ServiceFlow for service booking operations, Mini CRM for sales pipeline management, and AI Business Assistant for AI-powered lead capture.",
        ],
      },
      strengths: [
        {
          title: "Full-stack build",
          body: "Comfortable shaping interfaces, data flow, and application logic into one usable web product.",
        },
        {
          title: "Business focus",
          body: "Projects are built around actual workflows, clear information, and pages that support a practical goal.",
        },
        {
          title: "Responsive interface",
          body: "Layouts are prepared for desktop and mobile so the experience stays readable and stable.",
        },
      ],
      experience: {
        kicker: "Profile",
        title: "Current profile, work focus, and education.",
        items: [
          {
            period: "Current",
            role: "Full-Stack Web Developer",
            company: "Self Employed",
            summary:
              "Builds business web apps with React, TypeScript, Node.js, authentication, APIs, database models, and live deployment workflows.",
            tags: ["React", "TypeScript", "Node.js", "Prisma", "Business Web Apps"],
          },
          {
            period: "Education",
            role: "Student",
            company: "Universitas Islam Kalimantan Muhammad Arsyad Al Banjari",
            summary:
              "Studies at UNISKA MAB while developing practical web projects and strengthening software development fundamentals.",
            tags: ["UNISKA MAB", "Web Development", "Software Fundamentals"],
          },
        ],
      },
      projects: {
        kicker: "Projects",
        title: "Selected work from my current developer profile.",
        body: "Live projects connected to my public GitHub and LinkedIn-facing full-stack web developer profile.",
        items: [
          {
            title: "Ariza Portfolio",
            type: "Personal Website",
            year: "2026",
            summary:
              "A bilingual portfolio website for presenting profile, skills, projects, and contact information in one clean responsive page.",
            result: "A personal web presence aligned with the current LinkedIn profile.",
            tags: ["Next.js", "React", "TypeScript"],
            links: [
              { label: "Live", href: "https://portofolio-arizanaufalkholish.vercel.app" },
              { label: "Repo", href: "https://github.com/Antophic/Portofolio" },
            ],
            image: {
              src: "/projects/ariza-portfolio.svg",
              alt: "Preview image for the Ariza Portfolio project",
            },
          },
          {
            title: "ServiceFlow",
            type: "Booking Management App",
            year: "2026",
            summary:
              "A full-stack booking and job management system for service businesses, covering public booking intake, admin review, staff assignment, scheduling, and job status workflows.",
            result: "A database-backed operations dashboard for managing service work from request to completion.",
            tags: ["React", "TypeScript", "Node.js", "MySQL", "Prisma"],
            links: [
              { label: "Live", href: "https://service-booking-management-system.vercel.app" },
              {
                label: "Repo",
                href: "https://github.com/Antophic/SERVICE-BOOKING-MANAGEMENT-SYSTEM",
              },
            ],
            image: {
              src: "/projects/serviceflow-dashboard.webp",
              alt: "Operations dashboard screenshot for the ServiceFlow project",
            },
          },
          {
            title: "Mini CRM",
            type: "Sales Pipeline App",
            year: "2026",
            summary:
              "A full-stack CRM workspace for tracking prospects, deal values, follow-ups, notes, and client activity from an authenticated dashboard.",
            result: "A practical sales pipeline tool with role-based access, filtering, metrics, and activity history.",
            tags: ["React", "TypeScript", "Express", "MySQL", "JWT"],
            links: [
              { label: "Live", href: "https://mini-crm-opal-two.vercel.app" },
              { label: "Repo", href: "https://github.com/Antophic/Mini-CRM" },
            ],
            image: {
              src: "/projects/mini-crm-dashboard.webp",
              alt: "Dashboard screenshot for the Mini CRM project",
            },
          },
          {
            title: "AI Business Assistant",
            type: "AI Lead Capture App",
            year: "2026",
            summary:
              "A business website demo with an AI chat assistant that answers customer questions, detects lead intent, and captures qualified leads for follow-up.",
            result: "A lead-generation workflow combining a product landing page, AI chat API, validation, and dashboard-ready lead data.",
            tags: ["Next.js", "TypeScript", "OpenAI API", "Supabase"],
            links: [
              { label: "Live", href: "https://ai-bisnis.vercel.app" },
              { label: "Repo", href: "https://github.com/Antophic/ai-bisnis" },
            ],
            image: {
              src: "/projects/ai-business-assistant.png",
              alt: "Landing page screenshot for the AI Business Assistant project",
            },
          },
        ],
      },
      skills: {
        kicker: "Skills",
        title: "Tools behind the current full-stack profile.",
        groups: [
          {
            group: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
          },
          {
            group: "Backend & Apps",
            items: ["Node.js", "API Integration", "Business Logic", "Data Flow", "Web Apps"],
          },
          {
            group: "Workflow",
            items: ["GitHub", "Clean Code", "Deployment", "Documentation", "Project Structure"],
          },
        ],
      },
      process: {
        kicker: "Process",
        title: "How I move from business need to working web app.",
        steps: [
          {
            step: "01",
            title: "Understand",
            body: "Clarify the business goal, user flow, content, and main feature that needs to work first.",
          },
          {
            step: "02",
            title: "Build",
            body: "Create responsive screens and application logic using React, TypeScript, and Node.js foundations.",
          },
          {
            step: "03",
            title: "Ship",
            body: "Prepare the project for deployment, review the result, and keep the structure easy to continue.",
          },
        ],
      },
      contact: {
        kicker: "Contact",
        title: "Let's build a practical web app or business website.",
        body: "Reach out if you need a responsive website, portfolio, or business web app built with a clear full-stack workflow.",
        button: "Send email",
      },
    },
    id: {
      label: "ID",
      ariaLabel: "Ganti ke Bahasa Indonesia",
      nav: {
        about: "Tentang",
        experience: "Profil",
        projects: "Proyek",
        contact: "Kontak",
      },
      eyebrow: "Portofolio full-stack",
      headline: "Full-stack web developer untuk aplikasi web bisnis yang praktis.",
      subheadline:
        "Saya membangun produk responsif dengan React, TypeScript, Node.js, dan workflow berbasis database, termasuk CRM, booking service, AI assistant, dan portfolio.",
      contactLabel: "Hubungi saya",
      resumeLabel: "Lihat proyek",
      status: "Self Employed",
      statusNote: "React, TypeScript, Node.js | Business Web Apps",
      profile: {
        locationLabel: "Lokasi",
        focusLabel: "Fokus",
        stackLabel: "Stack utama",
      },
      stats: [
        { value: "03", label: "Project bisnis live" },
        { value: "FS", label: "Implementasi full-stack" },
        { value: "UI", label: "Interface produk responsif" },
      ],
      about: {
        kicker: "Tentang",
        title: "Saya membangun web app praktis dari workflow produk nyata.",
        paragraphs: [
          "Profil saya sekarang fokus ke full-stack web development untuk aplikasi bisnis. Saya mengerjakan frontend, backend, autentikasi, alur database, dan deployment supaya setiap project bisa dicoba sebagai produk yang berjalan.",
          "Project terbaru saya mencakup ServiceFlow untuk operasional booking service, Mini CRM untuk sales pipeline, dan AI Business Assistant untuk lead capture berbasis AI.",
        ],
      },
      strengths: [
        {
          title: "Build full-stack",
          body: "Terbiasa menyusun interface, alur data, dan logic aplikasi menjadi satu produk web yang bisa dipakai.",
        },
        {
          title: "Fokus bisnis",
          body: "Project dibangun dari workflow nyata, informasi yang jelas, dan halaman yang mendukung tujuan praktis.",
        },
        {
          title: "Interface responsif",
          body: "Layout disiapkan untuk desktop dan mobile supaya pengalaman tetap terbaca dan stabil.",
        },
      ],
      experience: {
        kicker: "Profil",
        title: "Profil terkini, fokus kerja, dan pendidikan.",
        items: [
          {
            period: "Saat ini",
            role: "Full-Stack Web Developer",
            company: "Self Employed",
            summary:
              "Membangun business web apps dengan React, TypeScript, Node.js, autentikasi, API, model database, dan workflow deployment live.",
            tags: ["React", "TypeScript", "Node.js", "Prisma", "Business Web Apps"],
          },
          {
            period: "Pendidikan",
            role: "Mahasiswa",
            company: "Universitas Islam Kalimantan Muhammad Arsyad Al Banjari",
            summary:
              "Menempuh pendidikan di UNISKA MAB sambil mengembangkan project web praktis dan memperkuat dasar pengembangan software.",
            tags: ["UNISKA MAB", "Web Development", "Software Fundamentals"],
          },
        ],
      },
      projects: {
        kicker: "Proyek",
        title: "Karya pilihan dari profil developer saya saat ini.",
        body: "Project live yang terhubung dengan GitHub publik dan profil full-stack web developer saya.",
        items: [
          {
            title: "Ariza Portfolio",
            type: "Website Pribadi",
            year: "2026",
            summary:
              "Website portfolio bilingual untuk menampilkan profil, skill, project, dan kontak dalam satu halaman responsif yang rapi.",
            result: "Personal web presence yang selaras dengan profil LinkedIn terkini.",
            tags: ["Next.js", "React", "TypeScript"],
            links: [
              { label: "Live", href: "https://portofolio-arizanaufalkholish.vercel.app" },
              { label: "Repo", href: "https://github.com/Antophic/Portofolio" },
            ],
            image: {
              src: "/projects/ariza-portfolio.svg",
              alt: "Gambar preview untuk project Ariza Portfolio",
            },
          },
          {
            title: "ServiceFlow",
            type: "Aplikasi Booking Management",
            year: "2026",
            summary:
              "Sistem booking dan manajemen job full-stack untuk bisnis jasa, mencakup booking publik, review admin, assignment staff, scheduling, dan status pekerjaan.",
            result: "Dashboard operasional berbasis database untuk mengelola pekerjaan service dari request sampai selesai.",
            tags: ["React", "TypeScript", "Node.js", "MySQL", "Prisma"],
            links: [
              { label: "Live", href: "https://service-booking-management-system.vercel.app" },
              {
                label: "Repo",
                href: "https://github.com/Antophic/SERVICE-BOOKING-MANAGEMENT-SYSTEM",
              },
            ],
            image: {
              src: "/projects/serviceflow-dashboard.webp",
              alt: "Screenshot dashboard operasional untuk project ServiceFlow",
            },
          },
          {
            title: "Mini CRM",
            type: "Aplikasi Sales Pipeline",
            year: "2026",
            summary:
              "Workspace CRM full-stack untuk melacak prospect, nilai deal, follow-up, notes, dan aktivitas client dari dashboard yang terautentikasi.",
            result: "Tool sales pipeline praktis dengan role-based access, filter, metrik, dan riwayat aktivitas.",
            tags: ["React", "TypeScript", "Express", "MySQL", "JWT"],
            links: [
              { label: "Live", href: "https://mini-crm-opal-two.vercel.app" },
              { label: "Repo", href: "https://github.com/Antophic/Mini-CRM" },
            ],
            image: {
              src: "/projects/mini-crm-dashboard.webp",
              alt: "Screenshot dashboard untuk project Mini CRM",
            },
          },
          {
            title: "AI Business Assistant",
            type: "Aplikasi AI Lead Capture",
            year: "2026",
            summary:
              "Demo website bisnis dengan AI chat assistant yang menjawab pertanyaan customer, mendeteksi intent lead, dan menangkap lead untuk follow-up.",
            result: "Workflow lead generation yang menggabungkan landing page produk, AI chat API, validasi, dan data lead siap dashboard.",
            tags: ["Next.js", "TypeScript", "OpenAI API", "Supabase"],
            links: [
              { label: "Live", href: "https://ai-bisnis.vercel.app" },
              { label: "Repo", href: "https://github.com/Antophic/ai-bisnis" },
            ],
            image: {
              src: "/projects/ai-business-assistant.png",
              alt: "Screenshot landing page untuk project AI Business Assistant",
            },
          },
        ],
      },
      skills: {
        kicker: "Skill",
        title: "Tools sesuai profil full-stack saat ini.",
        groups: [
          {
            group: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
          },
          {
            group: "Backend & Apps",
            items: ["Node.js", "API Integration", "Business Logic", "Data Flow", "Web Apps"],
          },
          {
            group: "Workflow",
            items: ["GitHub", "Clean Code", "Deployment", "Documentation", "Project Structure"],
          },
        ],
      },
      process: {
        kicker: "Proses",
        title: "Cara saya mengubah kebutuhan bisnis menjadi web app.",
        steps: [
          {
            step: "01",
            title: "Understand",
            body: "Memahami tujuan bisnis, alur pengguna, konten, dan fitur utama yang perlu berjalan lebih dulu.",
          },
          {
            step: "02",
            title: "Build",
            body: "Membangun layar responsif dan logic aplikasi memakai dasar React, TypeScript, dan Node.js.",
          },
          {
            step: "03",
            title: "Ship",
            body: "Menyiapkan project untuk deploy, meninjau hasilnya, dan menjaga struktur tetap mudah dilanjutkan.",
          },
        ],
      },
      contact: {
        kicker: "Kontak",
        title: "Mari bangun web app atau website bisnis yang praktis.",
        body: "Hubungi saya kalau kamu butuh website responsif, portfolio, atau business web app dengan workflow full-stack yang jelas.",
        button: "Kirim email",
      },
    },
  },
} as const;
