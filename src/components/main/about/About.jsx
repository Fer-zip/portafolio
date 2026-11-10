import "./about.css";
import IconJS from "../../../assets/IconJS.jsx";
import IconCSS from "../../../assets/IconCSS.jsx";
import IconExpress from "../../../assets/IconExpress.jsx";
import IconPython from "../../../assets/IconPython.jsx";
import IconReact from "../../../assets/IconReact.jsx";
import IconHTML from "../../../assets/IconHTML.jsx";
import IconFastAPI from "../../../assets/IconFastAPI.jsx";
import IconDatabase from "../../../assets/IconDatabase.jsx";
import IconBriefcase from "../../../assets/IconBriefcase.jsx";
import IconAward from "../../../assets/IconAward.jsx";

const experiences = [
  {
    company: "CONAUTI",
    role: "Desarrollador Full Stack",
    period: "Noviembre 2024 – Junio 2026",
    description:
      "Diseño e implementación de plataformas web y soluciones asistidas por IA. Lideré el desarrollo de la plataforma Replikers (orquestación de agentes IA y Google OAuth) y el sistema de gestión de proyectos con predicciones analíticas.",
    technologies: ["React.js", "Express", "FastAPI", "Supabase", "REST APIs", "CSS"],
  },
  {
    company: "SÜDESCO",
    role: "Especialista en Automatización de Datos & Software",
    period: "Enero 2026 – Febrero 2026",
    description:
      "Desarrollo e implementación de herramienta a medida para extracción y estructuración automática de datos desde reportes PDF de Power BI. Eliminación de errores manuales y entrega de carta de recomendación formal.",
    technologies: ["Python", "Power BI", "Data Extraction", "Automatización"],
  },
  {
    company: "EQUIPAMIENTO HOTELERO PERU E.I.R.L.",
    role: "Desarrollador Backend & Arquitectura Web",
    period: "Enero 2025 – Junio 2025",
    description:
      "Diseño de arquitectura de base de datos relacional y módulos backend para comercio electrónico con sistema de correos y confirmaciones vía PHPMailer. Reconocimiento formal por calidad técnica.",
    technologies: ["PHP", "MySQL", "JavaScript", "PHPMailer", "Arquitectura DB"],
  },
];

const certifications = [
  {
    title: "Ingeniería de Software con Inteligencia Artificial",
    institution: "SENATI",
    period: "2023 – 2026",
    detail: "Formación profesional técnica avanzada en software y modelos de IA.",
  },
  {
    title: "Artificial Intelligence with Machine Learning",
    institution: "Oracle",
    detail: "Fundamentos y aplicaciones de modelos de aprendizaje automático.",
  },
  {
    title: "Introduction to LangGraph",
    institution: "LangChain",
    detail: "Orquestación de grafos y agentes inteligentes autónomos.",
  },
  {
    title: "Java Foundations",
    institution: "Oracle Academy",
    detail: "Estructuras de datos, orientación a objetos y algoritmos.",
  },
  {
    title: "Inglés Básico (Intensive Basic 4)",
    institution: "Certificación de Idioma",
    detail: "Capacidad de comprensión y comunicación técnica.",
  },
];

const About = () => {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        <div className="sectionHeader" data-reveal>
          <h2>Sobre mí</h2>
          <span className="sectionSubtitle">Perfil profesional, experiencia y formación</span>
        </div>

        <div className="aboutOverview" data-reveal>
          <div className="aboutBioCard">
            <h3>Trayectoria & Perfil</h3>
            <p>
              Soy un desarrollador web apasionado por la ingeniería de software y la inteligencia artificial,
              con sólida experiencia en la creación de aplicaciones robustas desde cero, tanto en Frontend (React.js)
              como en Backend (Express, FastAPI, PHP).
            </p>
            <p>
              Me especializo en implementar arquitecturas modulares, sistemas de autenticación seguros (OAuth),
              conexión y orquestación de agentes de IA vía APIs REST, y automatización de flujos de datos.
              Actualmente curso la carrera de <strong>Ingeniería de Software con IA en SENATI</strong>.
            </p>
          </div>

          <div className="aboutSkillsCard">
            <h3>Habilidades Técnicas</h3>
            <div className="skillsGrid">
              <span className="skillTag">
                <IconJS />
                <span>JavaScript</span>
              </span>
              <span className="skillTag">
                <IconReact />
                <span>React.js</span>
              </span>
              <span className="skillTag">
                <IconExpress />
                <span>Express</span>
              </span>
              <span className="skillTag">
                <IconPython />
                <span>Python</span>
              </span>
              <span className="skillTag">
                <IconFastAPI />
                <span>FastAPI</span>
              </span>
              <span className="skillTag">
                <IconDatabase />
                <span>Supabase / MySQL</span>
              </span>
              <span className="skillTag">
                <IconHTML />
                <span>HTML5</span>
              </span>
              <span className="skillTag">
                <IconCSS />
                <span>CSS3</span>
              </span>
            </div>
          </div>
        </div>

        {/* Experiencia Laboral */}
        <div className="experienceSection" data-reveal>
          <div className="subHeader">
            <IconBriefcase />
            <h3>Experiencia Laboral</h3>
          </div>
          <div className="experienceList">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.role}`} className="experienceCard">
                <div className="expHeader">
                  <div>
                    <h4>{exp.role}</h4>
                    <span className="expCompany">{exp.company}</span>
                  </div>
                  <span className="expPeriod">{exp.period}</span>
                </div>
                <p className="expDesc">{exp.description}</p>
                <div className="expTechs">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="expBadge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educación y Certificaciones */}
        <div className="certificationsSection" data-reveal>
          <div className="subHeader">
            <IconAward />
            <h3>Educación & Certificaciones</h3>
          </div>
          <div className="certGrid">
            {certifications.map((cert) => (
              <div key={`${cert.institution}-${cert.title}`} className="certCard">
                <span className="certInstitution">{cert.institution}</span>
                <h4>{cert.title}</h4>
                {cert.period && <span className="certPeriod">{cert.period}</span>}
                <p>{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
