"use client";

import { useState } from "react";
import { portfolio } from "@antophic/portfolio-content";

type Language = keyof typeof portfolio.languages;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const content = portfolio.languages[language];

  return (
    <main className="site-shell" lang={language}>
      <header className="topbar" id="home">
        <a className="brand-lockup" href="#home" aria-label="Antophic home">
          <span className="brand-mark" aria-hidden="true">
            <img
              alt=""
              className="brand-avatar"
              height="44"
              src={portfolio.avatar}
              width="44"
            />
          </span>
          <span>
            <strong>{portfolio.name}</strong>
            <small>{portfolio.specialty}</small>
          </span>
        </a>

        <div className="topbar-actions">
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#expertise">{content.nav.expertise}</a>
            <a href="#work">{content.nav.work}</a>
            <a href="#process">{content.nav.process}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>

          <div className="language-switch" aria-label="Language selection" role="group">
            {Object.entries(portfolio.languages).map(([code, item]) => (
              <button
                aria-label={item.ariaLabel}
                aria-pressed={language === code}
                className={language === code ? "is-active" : ""}
                key={code}
                onClick={() => setLanguage(code as Language)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">{content.headline}</h1>
          <p className="hero-summary">{content.summary}</p>

          <div className="hero-actions" aria-label="Main actions">
            <a className="button button-primary" href={portfolio.contact.href}>
              {content.contactLabel}
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

        <aside className="profile-panel" aria-label="Antophic profile summary">
          <div className="profile-head">
            <img
              alt="GitHub profile avatar for Antophic"
              className="profile-avatar"
              height="96"
              src={portfolio.avatar}
              width="96"
            />
            <div>
              <span>{content.status}</span>
              <h2>{portfolio.name}</h2>
              <p>{portfolio.role}</p>
            </div>
          </div>

          <dl className="profile-meta">
            <div>
              <dt>{content.profile.locationLabel}</dt>
              <dd>{portfolio.location}</dd>
            </div>
            <div>
              <dt>{content.profile.focusLabel}</dt>
              <dd>{portfolio.specialty}</dd>
            </div>
          </dl>

          <div className="capability-list" aria-label="Capability highlights">
            {content.metrics.map((item) => (
              <div key={item.value}>
                <span>{item.value}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section intro-band" aria-label="Value summary">
        <p>{content.intro}</p>
      </section>

      <section className="section section-split" id="expertise">
        <div className="section-heading">
          <p className="section-kicker">{content.expertise.kicker}</p>
          <h2>{content.expertise.title}</h2>
          <p>{content.expertise.body}</p>
        </div>

        <div className="strength-grid">
          {content.strengths.map((item) => (
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
            <p className="section-kicker">{content.services.kicker}</p>
            <h2>{content.services.title}</h2>
          </div>
          <p>{content.services.body}</p>
        </div>

        <div className="service-grid">
          {content.services.items.map((service) => (
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
            <p className="section-kicker">{content.work.kicker}</p>
            <h2>{content.work.title}</h2>
          </div>
          <p>{content.work.body}</p>
        </div>

        <div className="project-list">
          {content.projects.map((project) => (
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
          <p className="section-kicker">{content.skills.kicker}</p>
          <h2>{content.skills.title}</h2>
        </div>

        <div className="skill-grid">
          {content.skillsList.map((group) => (
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
          <p className="section-kicker">{content.processIntro.kicker}</p>
          <h2>{content.processIntro.title}</h2>
        </div>

        <div className="process-list">
          {content.process.map((item) => (
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
          <p className="section-kicker">{content.contact.kicker}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.body}</p>
          <a className="contact-email" href={portfolio.contact.href}>
            {portfolio.contact.email}
          </a>
        </div>
        <a className="button button-primary" href={portfolio.contact.href}>
          {content.contact.button}
          <span aria-hidden="true">-&gt;</span>
        </a>
      </section>
    </main>
  );
}
