import { portfolio } from "./portfolio-data";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" id="home">
        <a className="brand-lockup" href="#home" aria-label="Antophic home">
          <span className="brand-mark" aria-hidden="true">
            {portfolio.initials}
          </span>
          <span>
            <strong>{portfolio.name}</strong>
            <small>{portfolio.role}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#kelebihan">Kelebihan</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{portfolio.eyebrow}</p>
          <h1 id="hero-title">{portfolio.headline}</h1>
          <p className="hero-summary">{portfolio.summary}</p>

          <div className="hero-actions" aria-label="Aksi utama">
            <a className="button button-primary" href={portfolio.contact.href}>
              {portfolio.contact.label}
              <span aria-hidden="true">-&gt;</span>
            </a>
            {portfolio.links.map((link) => (
              <a
                className="button button-quiet"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="workbench" aria-label="Ringkasan kerja Antophic">
          <div className="workbench-top">
            <span>ANTOPHIC.WORK</span>
            <span>{portfolio.location}</span>
          </div>
          <div className="workbench-grid">
            <div className="focus-block">
              <span className="block-label">Current focus</span>
              <strong>Clean web interface</strong>
              <p>Jelas dibaca, ringan dipakai, dan gampang diedit.</p>
            </div>
            <div className="signal-card signal-card-orange">
              <span>UI</span>
              <strong>Polish</strong>
            </div>
            <div className="signal-card signal-card-green">
              <span>Build</span>
              <strong>Fast</strong>
            </div>
            <div className="code-strip" aria-hidden="true">
              <span>const idea = "ship with taste";</span>
              <span>layout.check("mobile-first");</span>
              <span>handoff.make("editable");</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="stats-strip" aria-label="Cara kerja singkat">
        {portfolio.stats.map((item) => (
          <article className="stat-item" key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section section-split" id="kelebihan">
        <div className="section-heading">
          <p className="section-kicker">Kelebihan</p>
          <h2>Yang saya bawa ke setiap project.</h2>
          <p>
            Kekuatan utamanya ada di rasa, kerapian, dan kemampuan membuat
            sesuatu yang bisa dipakai cepat tanpa kehilangan arah visual.
          </p>
        </div>

        <div className="advantage-grid">
          {portfolio.advantages.map((item) => (
            <article className="advantage-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skill-section" id="skill">
        <div className="section-heading">
          <p className="section-kicker">Skill</p>
          <h2>Stack yang dipakai untuk bikin web terasa matang.</h2>
        </div>

        <div className="skill-grid">
          {portfolio.skills.map((group) => (
            <article className="skill-card" key={group.group}>
              <h3>{group.group}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="project">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">Project</p>
            <h2>Project pilihan yang menunjukkan cara saya berpikir.</h2>
          </div>
          <p>
            Saya menampilkan project lewat konteks, keputusan, dan detail kecil
            yang membuat hasil akhirnya lebih enak dipakai.
          </p>
        </div>

        <div className="project-grid">
          {portfolio.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="section-kicker">Alur</p>
          <h2>Cara saya menjaga project tetap bergerak.</h2>
        </div>

        <div className="process-list">
          {portfolio.process.map((item) => (
            <article className="process-item" key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band" id="kontak">
        <div>
          <p className="section-kicker">Kontak</p>
          <h2>{portfolio.availability}</h2>
        </div>
        <a className="button button-primary" href={portfolio.contact.href}>
          Mulai ngobrol
          <span aria-hidden="true">-&gt;</span>
        </a>
      </section>
    </main>
  );
}
