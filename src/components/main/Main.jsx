import { useEffect, useRef, useState } from "react";
import Project from "./project/Project";
import IconReact from "../../assets/IconReact";
import Hero from "./hero/Hero";
import About from "./about/About";
import Contact from "./contact/Contact";
import useScrollReveal from "../../hooks/useScrollReveal";
import replikersImg from "../../assets/img/replikers.png";
import replikers1Img from "../../assets/img/replikers1.png";
import replikers2Img from "../../assets/img/replikers2.png";
import CYS from "../../assets/img/CYS.png";
import CYS1 from "../../assets/img/CYS1.png";
import CYS2 from "../../assets/img/CYS2.png";
import "./main.css";

const projectsData = [
  {
    id: 1,
    name: "Sistema de Gestión de Proyectos con IA",
    company: "CONAUTI",
    description:
      "Plataforma integral para gestión y asignación de tareas, recursos y proyectos corporativos con módulo predictivo asistido por IA.",
    fullDescription:
      "Diseñé e implementé en CONAUTI una plataforma integral para la gestión y asignación de tareas, recursos y proyectos corporativos. Desarrollé un módulo analítico con sugerencias predictivas y seguimiento del estado de proyectos asistido por Inteligencia Artificial en tiempo real.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    ],
    technologies: ["React", "Express", "FastAPI", "Supabase", "CSS"],
    repoLink: "https://github.com/Fer-zip",
    liveLink: "https://github.com/Fer-zip",
  },
  {
    id: 2,
    name: "Plataforma Web Replikers",
    company: "CONAUTI",
    description:
      "Plataforma para la creación de réplicas digitales de consultores disponibles 24/7 mediante orquestación de agentes de IA.",
    fullDescription:
      "Lideré el desarrollo desde cero de una plataforma orientada a la creación de réplicas digitales de consultores disponibles 24/7. Integré autenticación segura mediante Google OAuth y orquesté la conexión con múltiples agentes y servicios de Inteligencia Artificial a través de APIs REST.",
    images: [replikersImg, replikers2Img, replikers1Img],
    technologies: ["React", "Express", "JavaScript", "REST APIs", "CSS"],
    repoLink: "https://github.com/Fer-zip",
    liveLink: "https://github.com/Fer-zip",
  },
  {
    id: 3,
    name: "Automatización & Extracción de Datos",
    company: "SÜDESCO",
    description:
      "Herramienta a medida para extracción, consolidación y estructuración automática de datos desde reportes PDF de Power BI.",
    fullDescription:
      "Desarrollé e implementé una herramienta de software a medida para la extracción, consolidación y estructuración automática de datos desde reportes en PDF exportados de Power BI. Optimicé el flujo operativo de captura y procesamiento de información, eliminando el error manual y reduciendo drásticamente los tiempos de entrega. Recibí una carta de recomendación formal por eficiencia técnica y resolución proactiva.",
    images: [CYS, CYS2, CYS1],
    technologies: ["Python", "Power BI", "Data Automation", "REST APIs"],
    repoLink: "https://github.com/Fer-zip",
    liveLink: "https://github.com/Fer-zip",
  },
  {
    id: 4,
    name: "E-Commerce & Arquitectura Web",
    company: "Equipamiento Hotelero Perú",
    description:
      "Diseño de arquitectura de base de datos relacional y servicios backend para plataforma e-commerce con notificaciones automatizadas.",
    fullDescription:
      "Diseñé y modelé la arquitectura de base de datos relacional (MySQL) y la estructura central para la plataforma de comercio electrónico. Implementé módulos de servicio backend, destacando un sistema automatizado de notificaciones y confirmaciones por correo electrónico mediante PHPMailer. Reconocido formalmente con una carta de recomendación por el cumplimiento y la calidad de la arquitectura entregada.",
    images: [CYS, CYS2, CYS1],
    technologies: ["PHP", "MySQL", "JavaScript", "PHPMailer", "CSS"],
    repoLink: "https://github.com/Fer-zip",
    liveLink: "https://github.com/Fer-zip",
  },
];

const Main = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const modalRef = useRef(null);
  const modalCloseBtnRef = useRef(null);
  const previousFocusRef = useRef(null);

  useScrollReveal();

  const handleModal = (project) => {
    previousFocusRef.current = document.activeElement;
    setSelectedProject(project);
    setCurrentImgIndex(0);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const projectImages = selectedProject
    ? selectedProject.images?.length
      ? selectedProject.images
      : selectedProject.image
        ? [selectedProject.image]
        : []
    : [];

  const handleNextImage = () => {
    if (projectImages.length <= 1) return;
    setCurrentImgIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrevImage = () => {
    if (projectImages.length <= 1) return;
    setCurrentImgIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length,
    );
  };

  // Lock body scroll, trap keyboard focus, handle arrow keys and close modal with Escape.
  useEffect(() => {
    if (!isModalVisible) {
      if (
        previousFocusRef.current &&
        typeof previousFocusRef.current.focus === "function"
      ) {
        previousFocusRef.current.focus();
      }
      return;
    }

    // Move initial focus to the close button when opened
    const focusTimer = setTimeout(() => {
      modalCloseBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNextImage();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevImage();
        return;
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === firstEl) {
          event.preventDefault();
          lastEl.focus();
        } else if (!event.shiftKey && document.activeElement === lastEl) {
          event.preventDefault();
          firstEl.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalVisible, projectImages.length]);

  // Toggle the back-to-top button visibility.
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main>
        {/* HERO */}
        <Hero />

        {/* ABOUT & EXPERIENCE */}
        <About />

        {/* PROJECTS */}
        <section id="projects" className="ctnProjects">
          <div className="sectionHeader" data-reveal>
            <h2>Proyectos Destacados</h2>
            <span className="sectionSubtitle">
              Soluciones reales desarrolladas en el ámbito profesional
            </span>
          </div>
          <div className="listProjects">
            {projectsData.map((project, index) => (
              <Project
                key={project.id}
                project={project}
                index={index}
                handleModal={handleModal}
              />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <Contact />

        {/* MODAL */}
        {isModalVisible && selectedProject && (
          <div className="ctnModal">
            <div
              className={`modal ${isModalVisible ? "visible" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.name}
            >
              <button
                className="modalCloseBtn"
                onClick={handleCloseModal}
                aria-label="Cerrar modal"
              >
                ✕
              </button>
              <div className="modalImg">
                <div className="modalCarousel">
                  {projectImages.length > 0 && (
                    <img
                      src={projectImages[currentImgIndex]}
                      alt={`${selectedProject.name} - Vista ${currentImgIndex + 1}`}
                      key={currentImgIndex}
                      className="carouselActiveImg"
                    />
                  )}
                  {projectImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="carouselBtn carouselBtnPrev"
                        onClick={handlePrevImage}
                        aria-label="Imagen anterior"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="carouselBtn carouselBtnNext"
                        onClick={handleNextImage}
                        aria-label="Siguiente imagen"
                      >
                        ›
                      </button>
                      <div
                        className="carouselDots"
                        role="tablist"
                        aria-label="Selector de imágenes"
                      >
                        {projectImages.map((_, idx) => (
                          <button
                            type="button"
                            key={idx}
                            role="tab"
                            className={`carouselDot ${idx === currentImgIndex ? "active" : ""}`}
                            onClick={() => setCurrentImgIndex(idx)}
                            aria-label={`Ir a la imagen ${idx + 1}`}
                            aria-selected={idx === currentImgIndex}
                          />
                        ))}
                      </div>
                      <span className="carouselBadge">
                        {currentImgIndex + 1} / {projectImages.length}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="modalText">
                {selectedProject.company && (
                  <span className="modalCompany">
                    {selectedProject.company}
                  </span>
                )}
                <h3>{selectedProject.name}</h3>
                <p>{selectedProject.fullDescription}</p>
                <div className="ctnList">
                  <p>Tecnologías utilizadas:</p>
                  <ul>
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index}>
                        {tech === "React" ? (
                          <>
                            <IconReact />
                            <p>React</p>
                          </>
                        ) : (
                          <p>{tech}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ctnModalButtons">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnModalPrimary"
                  >
                    Ver Proyecto
                  </a>
                  <a
                    href={selectedProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnModalSecondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      {isModalVisible && (
        <div
          className={`screenGrey ${isModalVisible ? "visible" : ""}`}
          onClick={handleCloseModal}
        ></div>
      )}

      <button
        className={"backToTop" + (showTopBtn ? " backToTop-visible" : "")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver arriba"
        title="Volver arriba"
      >
        ↑
      </button>
    </>
  );
};

export default Main;
