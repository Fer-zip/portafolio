import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
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
