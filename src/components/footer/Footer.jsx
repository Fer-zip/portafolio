import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Jean Piere Fernandez</h3>
          <p>
            Desarrollador Web Full Stack & Estudiante de Ingeniería de Software
            con Inteligencia Artificial (SENATI). Soluciones escalables,
            modernas y orientadas a resultados.
          </p>
        </div>
        <div className="footer-section">
          <h3>Navegación</h3>
          <ul>
            <li>
              <a href="#hero">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto Directo</h3>
          <p>
            Email:{" "}
            <a href="mailto:jeanpierefernandez80@gmail.com" className="footerLink">
              jeanpierefernandez80@gmail.com
            </a>
          </p>
          <p>
            WhatsApp / Cel:{" "}
            <a
              href="https://wa.me/51979740819"
              target="_blank"
              rel="noopener noreferrer"
              className="footerLink"
            >
              +51 979740819
            </a>
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Fer-zip"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jean-piere-fernandez-torres-19b2a82b9"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/51979740819"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Jean Piere Aldair Fernandez Torres.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
