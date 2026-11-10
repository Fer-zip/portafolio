import "./hero.css";
import IconGithub from "../../../assets/IconGithub.jsx";
import IconLinkedin from "../../../assets/IconLinkedin.jsx";
import IconDocument from "../../../assets/IconDocument.jsx";
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
            <IconDocument />
            <span>Descargar CV</span>
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
