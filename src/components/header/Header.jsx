import { useEffect, useRef, useState } from "react";
import IconLanguage from "../../assets/IconLanguage";
import "./header.css";
import IconHome from "../../assets/IconHome";
import IconPerson from "../../assets/IconPerson";
import IconPortfolio from "../../assets/IconPortfolio";
import IconMail from "../../assets/IconMail";

const navItems = [
  { id: "hero", label: "Inicio", Icon: IconHome },
  { id: "about", label: "Sobre Mí", Icon: IconPerson },
  { id: "projects", label: "Proyectos", Icon: IconPortfolio },
  { id: "contact", label: "Contacto", Icon: IconMail },
];

const Header = () => {
  const [language, setLanguage] = useState("ES");
  const [btnLanguage, setBtnLanguage] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const languageRef = useRef(null);
  const progressRef = useRef(null);

  // Close the language dropdown when clicking outside or pressing Escape.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setBtnLanguage(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setBtnLanguage(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Reading progress bar: update DOM transform directly to prevent full component re-render on each scroll tick.
  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? doc.scrollTop / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Scrollspy: highlight the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClickLanguage = () => setBtnLanguage((prev) => !prev);

  const handleClickLanguageES = () => {
    setLanguage("ES");
    setBtnLanguage(false);
  };

  const handleClickLanguageEN = () => {
    setLanguage("EN");
    setBtnLanguage(false);
  };

  return (
    <>
      <div
        ref={progressRef}
        className="scrollProgress"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />
      <header className="header">
        <div className="tittle">
          <a href="#hero">
            Jean Piere<span>.</span>
          </a>
        </div>
        <div className="ctnLanguage" ref={languageRef}>
          <button
            type="button"
            className="btn-ChangeLanguage"
            onClick={handleClickLanguage}
            title="Cambiar idioma"
            aria-haspopup="true"
            aria-expanded={btnLanguage}
          >
            <IconLanguage />
            <span className="langLabel">{language}</span>
          </button>
          <div
            className={
              "optionsLanguage" + (btnLanguage ? " optionsLanguage-active" : "")
            }
            role="menu"
            aria-label="Seleccionar idioma"
          >
            <button
              type="button"
              role="menuitem"
              className="optionLanguageItem"
              onClick={handleClickLanguageES}
            >
              Español
            </button>
            <button
              type="button"
              role="menuitem"
              className="optionLanguageItem"
              onClick={handleClickLanguageEN}
            >
              English
            </button>
          </div>
        </div>
      </header>
      <nav className="navbar" aria-label="Navegación principal">
        <ul>
          {navItems.map(({ id, label, Icon }) => (
            <li key={id} className={activeSection === id ? "active" : ""}>
              <a href={`#${id}`} title={label}>
                <Icon />
                <p>{label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
