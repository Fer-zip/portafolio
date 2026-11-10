import "./hero.css";
import IconGithub from "../../../assets/IconGithub.jsx";
import IconLinkedin from "../../../assets/IconLinkedin.jsx";
import IconReact from "../../../assets/IconReact.jsx";
import IconJS from "../../../assets/IconJS.jsx";
import IconPython from "../../../assets/IconPython.jsx";
import IconExpress from "../../../assets/IconExpress.jsx";

const Hero = () => {
  return (
    <section id="hero" className="heroSection">
      <div className="heroContent" data-reveal>
        <h1>
          Hola, soy <span>Jean Piere</span>
        </h1>
        <h2>Desarrollador Full Stack & Software con IA</h2>
        <p>
          Especializado en el desarrollo de aplicaciones web desde cero con
          React.js y Express. Experiencia conectando agentes de Inteligencia
          Artificial vía API, autenticación segura y automatización de flujos de
          datos.
        </p>
        <div className="heroButtons">
          <a
            href="./JeanPiereFernandez_cv.pdf"
            download="JeanPiereFernandez_cv.pdf"
            className="btnDownload"
            title="Descargar Currículum Vitae"
          >
            <span>Descargar CV</span>
            <svg
              className="btnDownloadIcon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://github.com/Fer-zip"
            target="_blank"
            rel="noopener noreferrer"
            className="btnSocial"
            title="GitHub"
            aria-label="Perfil de GitHub"
          >
            <IconGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jean-piere-fernandez-torres-19b2a82b9"
            target="_blank"
            rel="noopener noreferrer"
            className="btnSocial"
            title="LinkedIn"
            aria-label="Perfil de LinkedIn"
          >
            <IconLinkedin />
          </a>
        </div>
      </div>
      <div className="heroImage">
        <div className="heroImageGlow"></div>
        <div
          className="heroImageFrame"
          data-reveal
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="heroImageRing"></div>
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop"
            alt="Perfil de Jean Piere Fernandez"
            fetchPriority="high"
            width="340"
            height="340"
          />
          <span className="techBadge techBadge-react" title="React">
            <IconReact />
          </span>
          <span className="techBadge techBadge-js" title="JavaScript">
            <IconJS />
          </span>
          <span className="techBadge techBadge-express" title="Express">
            <IconExpress />
          </span>
          <span className="techBadge techBadge-python" title="Python">
            <IconPython />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
