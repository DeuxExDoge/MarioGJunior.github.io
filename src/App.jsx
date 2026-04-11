import './App.css'

const PRESENTATION_VIDEO_ID = 'vAratPB0qGA'
const PRESENTATION_SHORTS_URL =
  'https://youtube.com/shorts/vAratPB0qGA'

const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'educacion', label: 'Educación' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'certificados', label: 'Certificados' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'presentacion', label: 'Presentación' },
]

const EXPERIENCE = [
  {
    title: 'TalkKids — Fonoaudiología',
    points: [
      'Desarrollo del backend de juegos auditivos con niveles de dificultad.',
      'Express.js, MongoDB y APIs REST.',
      'Metodología Kanban para organización del equipo.',
    ],
  },
  {
    title: 'Bienal Internacional de Escultura — Chaco',
    points: [
      'Participación en una web funcional para la Bienal.',
      'Arquitecturas de software y despliegue con Docker.',
      'Node.js, Express, Firebase, React + Vite, Postman y Playwright.',
      'Coordinación de roles y prácticas de desarrollo colaborativo.',
    ],
    links: [
      {
        label: 'Backend',
        href: 'https://github.com/DeuxExDoge/bienal-backend-Testing',
      },
      {
        label: 'Front-end',
        href: 'https://github.com/DeuxExDoge/Bienal-Front-End',
      },
    ],
  },
  {
    title: 'Proyecto de Realidad Virtual Educativa',
    points: [
      'Aulas virtuales inmersivas con A-Frame para la enseñanza de la carrera.',
      'Gráficas en entornos 3D y representación de lógica de algoritmos.',
      'Recursos interactivos para mejorar la comprensión de temas complejos.',
    ],
    links: [
      {
        label: 'Repositorio',
        href: 'https://github.com/cuencadelplata/helloworld-vr-raia',
      },
    ],
  },
]

const EDUCATION = [
  {
    title: 'Ingeniería en Sistemas de Información',
    detail: '5.º año — Universidad de la Cuenca del Plata, Corrientes, Argentina.',
  },
  {
    title: 'Bachiller en Economía y Administración',
    detail:
      'Instituto Nuestra Señora de la Misericordia I. n°29 — Corrientes, Argentina.',
  },
]

const TECH_SKILLS = [
  'JavaScript',
  'Python',
  'Node.js',
  'Express.js',
  'React.js',
  'MongoDB',
  'MySQL',
  'Git',
  'GitHub',
  'Postman',
  'Kanban',
  'APIs REST',
]

const SOFT_SKILLS = [
  'Comunicación efectiva',
  'Trabajo en equipo',
  'Análisis y resolución de problemas',
  'Autonomía y organización',
  'Seguimiento de instrucciones',
  'Trabajo colaborativo ágil',
]

const CERTIFICATES = [
  {
    title: 'Huawei Seeds for the Future 2023–2024',
    detail:
      '1.º puesto sede Argentina–Paraguay–Uruguay. Tecnologías emergentes: 5G, IA, Cloud y Digital Power.',
  },
  {
    title: 'Programa Extracurricular de Inglés (CUI–UBA)',
    detail: 'Nivel 13 finalizado — febrero 2024 (marco B2).',
  },
  {
    title: 'Taller «Matemáticas en Acción» — FCA (UNNE)',
    detail: 'Participación como oyente — julio 2023.',
  },
]

const ABOUT =
  'Soy estudiante avanzado de Ingeniería en Sistemas de Información (5.º año), con un enfoque creciente en el desarrollo back-end y en la construcción de soluciones web funcionales, escalables y bien estructuradas. Cuento con experiencia en proyectos académicos y colaborativos trabajando con Node.js, Express.js, MongoDB y APIs REST, además de participación en tareas de integración, testing y despliegue. También incorporé Python a mi formación de manera autodidacta durante las vacaciones, ampliando mis herramientas para la resolución de problemas y el desarrollo de software. Me interesa resolver problemas mediante lógica, organización y desarrollo de soluciones que aporten valor real a usuarios y equipos.'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#inicio" className="logo">
            <span className="logo__mark">MG</span>
            <span className="logo__text">Mario González</span>
          </a>
          <nav className="nav" aria-label="Principal">
            <ul>
              {NAV.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="btn btn--small header-cta"
            href="https://github.com/DeuxExDoge"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero__grid">
            <div className="hero__content">
              <p className="eyebrow">Corrientes, Argentina</p>
              <h1>Mario Manuel González Jr.</h1>
              <p className="hero__role">
                Full Stack Developer
                <span className="hero__pipe"> · </span>
                <span className="hero__focus">enfoque back-end</span>
              </p>
              <p className="hero__lede">
                APIs REST, Node.js y bases de datos; integración, testing y
                despliegue en equipos ágiles.
              </p>
              <div className="hero__actions">
                <a className="btn" href="#contacto">
                  Contactar
                </a>
                <a
                  className="btn btn--ghost"
                  href="https://github.com/DeuxExDoge?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorios
                </a>
              </div>
            </div>
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__orb" />
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="container narrow">
            <h2>Sobre mí</h2>
            <p className="prose">{ABOUT}</p>
          </div>
        </section>

        <section id="experiencia" className="section section--alt">
          <div className="container">
            <h2>Experiencia y proyectos</h2>
            <p className="section__intro">
              Proyectos académicos y colaborativos donde apliqué stack moderno y
              trabajo en equipo.
            </p>
            <ul className="cards">
              {EXPERIENCE.map((job) => (
                <li key={job.title} className="card">
                  <h3>{job.title}</h3>
                  <ul className="card__list">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {job.links?.length > 0 && (
                    <div className="card__links">
                      {job.links.map(({ label, href }) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="card__link"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="educacion" className="section">
          <div className="container">
            <h2>Educación</h2>
            <ul className="timeline">
              {EDUCATION.map((e) => (
                <li key={e.title} className="timeline__item">
                  <h3>{e.title}</h3>
                  <p>{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="habilidades" className="section section--alt">
          <div className="container">
            <h2>Habilidades</h2>
            <div className="skills-grid">
              <div>
                <h3 className="skills__subtitle">Técnicas</h3>
                <ul className="tags">
                  {TECH_SKILLS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="skills__subtitle">Blandas</h3>
                <ul className="tags tags--soft">
                  {SOFT_SKILLS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="languages">
              <h3 className="skills__subtitle">Idiomas</h3>
              <p>
                <strong>Inglés</strong> — B2 (Nivel 13, CUI–UBA, feb. 2024).
                <br />
                <strong>Portugués</strong> — A2.
              </p>
            </div>
          </div>
        </section>

        <section id="certificados" className="section">
          <div className="container">
            <h2>Certificados y formación complementaria</h2>
            <ul className="cert-list">
              {CERTIFICATES.map((c) => (
                <li key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contacto" className="section section--contact">
          <div className="container narrow">
            <h2>Contacto</h2>
            <p className="section__intro">
              Si querés charlar sobre un proyecto o una oportunidad, escribime.
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-list__label">Email</span>
                <a href="mailto:mariomanuelgonzalezjr@gmail.com">
                  mariomanuelgonzalezjr@gmail.com
                </a>
              </li>
              <li>
                <span className="contact-list__label">Teléfono</span>
                <a href="tel:+543794842419">(+54) 379 484-2419</a>
              </li>
              <li>
                <span className="contact-list__label">GitHub</span>
                <a
                  href="https://github.com/DeuxExDoge"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/DeuxExDoge
                </a>
              </li>
              <li>
                <span className="contact-list__label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/mario-manuel-gonzález-junior-a25638296"
                  target="_blank"
                  rel="noreferrer"
                >
                  Perfil de LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="presentacion" className="section section--alt section--video">
          <div className="container narrow">
            <h2>Presentación en video</h2>
            <p className="section__intro">
              Video corto de presentación (
              <a
                href={PRESENTATION_SHORTS_URL}
                target="_blank"
                rel="noreferrer noopener"
              >
                abrir en YouTube
              </a>
              ).
            </p>
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${PRESENTATION_VIDEO_ID}`}
                title="Presentación — Mario Manuel González Jr."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p>© {new Date().getFullYear()} Mario Manuel González Jr.</p>
          <p className="site-footer__note">Hecho con React y Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App
