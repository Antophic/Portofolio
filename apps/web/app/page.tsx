"use client";

import Image from "next/image";
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
            <Image
              alt=""
              className="brand-avatar"
              height={44}
              src={portfolio.avatar}
              unoptimized
              width={44}
            />
          </span>
          <span>
            <strong>{portfolio.name}</strong>
            <small>{portfolio.specialty}</small>
          </span>
        </a>

        <div className="topbar-actions">
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">{content.nav.about}</a>
            <a href="#experience">{content.nav.experience}</a>
            <a href="#projects">{content.nav.projects}</a>
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

      <div className="social-rail" aria-label="Portfolio links">
        {portfolio.links.map((link) => (
          <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
            {link.label}
          </a>
        ))}
        <a href={portfolio.contact.href}>Email</a>
      </div>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">{content.headline}</h1>
          <p className="hero-summary">{content.subheadline}</p>

          <div className="hero-actions" aria-label="Main actions">
            <a className="button button-primary" href={portfolio.contact.href}>
              {content.contactLabel}
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-secondary" href="#projects">
              {content.resumeLabel}
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Antophic profile summary">
          <div className="profile-head">
            <Image
              alt="GitHub profile avatar for Antophic"
              className="profile-avatar"
              height={96}
              src={portfolio.avatar}
              unoptimized
              width={96}
            />
            <div>
              <span>{content.status}</span>
              <h2>{portfolio.name}</h2>
              <p>{content.statusNote}</p>
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
            <div>
              <dt>{content.profile.stackLabel}</dt>
              <dd>React / Next.js / TypeScript</dd>
            </div>
          </dl>

          <div className="capability-list" aria-label="Capability highlights">
            {content.stats.map((item) => (
              <div key={item.value}>
                <span>{item.value}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section section-split" id="about">
        <div className="section-heading">
          <p className="section-kicker">{content.about.kicker}</p>
          <h2>{content.about.title}</h2>
        </div>

        <div className="about-copy">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="strength-grid">
            {content.strengths.map((item) => (
              <article className="strength-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-split" id="experience">
        <div className="section-heading sticky-heading">
          <p className="section-kicker">{content.experience.kicker}</p>
          <h2>{content.experience.title}</h2>
        </div>

        <div className="experience-list">
          {content.experience.items.map((item) => (
            <article className="experience-item" key={`${item.period}-${item.role}`}>
              <div className="item-period">{item.period}</div>
              <div>
                <h3>
                  {item.role}
                  <span>{item.company}</span>
                </h3>
                <p>{item.summary}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-section" id="projects">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">{content.projects.kicker}</p>
            <h2>{content.projects.title}</h2>
          </div>
          <p>{content.projects.body}</p>
        </div>

        <div className="project-list">
          {content.projects.items.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
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
          {content.skills.groups.map((group) => (
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

      <section className="section process-section">
        <div className="section-heading">
          <p className="section-kicker">{content.process.kicker}</p>
          <h2>{content.process.title}</h2>
        </div>

        <div className="process-list">
          {content.process.steps.map((item) => (
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
