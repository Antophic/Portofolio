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
            <small>{portfolio.specialty}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
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
                className="button button-secondary"
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

        <aside className="profile-panel" aria-label="Profil singkat Antophic">
          <div className="profile-head">
            <img
              alt="Avatar Antophic"
              className="profile-avatar"
              height="96"
              src={portfolio.avatar}
              width="96"
            />
            <div>
              <span>{portfolio.status}</span>
              <h2>{portfolio.name}</h2>
              <p>{portfolio.role}</p>
            </div>
          </div>

          <dl className="profile-meta">
            <div>
              <dt>Location</dt>
              <dd>{portfolio.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{portfolio.specialty}</dd>
            </div>
          </dl>

          <div className="capability-list" aria-label="Highlight kemampuan">
            {portfolio.metrics.map((item) => (
              <div key={item.value}>
                <span>{item.value}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section intro-band" aria-label="Ringkasan nilai">
        <p>
          Professional web presence untuk orang yang ingin terlihat serius:
          struktur jelas, tampilan tenang, performa siap, dan konten mudah
          diperbarui.
        </p>
      </section>

      <section className="section section-split" id="expertise">
        <div className="section-heading">
          <p className="section-kicker">Expertise</p>
          <h2>Kualitas yang saya jaga di setiap website.</h2>
          <p>
            Saya menggabungkan rasa desain dan implementasi frontend supaya
            hasil akhirnya terlihat matang, bukan sekadar tersusun.
          </p>
        </div>

        <div className="strength-grid">
          {portfolio.strengths.map((item) => (
            <article className="strength-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">What I Build</p>
            <h2>Website yang dibuat untuk dipakai, bukan cuma dilihat.</h2>
          </div>
          <p>
            Setiap jenis project punya prioritas berbeda. Saya menjaga agar
            tampilan, konten, dan struktur teknisnya bergerak ke tujuan yang
            sama.
          </p>
        </div>

        <div className="service-grid">
          {portfolio.services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2>Project pilihan dengan arah yang jelas.</h2>
          </div>
          <p>
            Setiap project dirancang untuk menunjukkan konteks, keputusan
            desain, hasil, dan teknologi yang dipakai secara ringkas.
          </p>
        </div>

        <div className="project-list">
          {portfolio.projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-result">
                <strong>{project.result}</strong>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skill-section">
        <div className="section-heading">
          <p className="section-kicker">Skill Stack</p>
          <h2>Skill yang mendukung eksekusi dari ide ke website siap pakai.</h2>
        </div>

        <div className="skill-grid">
          {portfolio.skills.map((group) => (
            <article className="skill-card" key={group.group}>
              <h3>{group.group}</h3>
              <div className="tag-list">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading">
          <p className="section-kicker">Process</p>
          <h2>Alur kerja yang menjaga hasil tetap fokus.</h2>
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

      <section className="contact-band" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>{portfolio.status}</h2>
          <p>
            Cocok kalau kamu butuh portfolio, landing page, atau interface web
            yang terlihat lebih dewasa dan siap dipresentasikan.
          </p>
        </div>
        <a className="button button-primary" href={portfolio.contact.href}>
          Mulai diskusi
          <span aria-hidden="true">-&gt;</span>
        </a>
      </section>
    </main>
  );
}
