import { useState } from "react";
import "./contact.css";
import IconMail from "../../../assets/IconMail.jsx";
import IconWhatsApp from "../../../assets/IconWhatsApp.jsx";
import IconLinkedin from "../../../assets/IconLinkedin.jsx";
import IconGithub from "../../../assets/IconGithub.jsx";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contactSection">
      <div className="contactWrapper">
        <div className="sectionHeader" data-reveal>
          <h2>Contacto</h2>
          <span className="sectionSubtitle">
            ¿Tienes un proyecto en mente o una propuesta laboral? ¡Hablemos!
          </span>
        </div>

        <div className="contactContent" data-reveal>
          {/* Tarjetas de Información Directa */}
          <div className="contactInfo">
            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <IconMail />
              </div>
              <div className="contactCardText">
                <h4>Correo Electrónico</h4>
                <a href="mailto:jeanpierefernandez80@gmail.com">
                  jeanpierefernandez80@gmail.com
                </a>
              </div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <IconWhatsApp />
              </div>
              <div className="contactCardText">
                <h4>WhatsApp / Celular</h4>
                <a
                  href="https://wa.me/51979740819"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +51 979740819
                </a>
              </div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <IconLinkedin />
              </div>
              <div className="contactCardText">
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/jean-piere-fernandez-torres-19b2a82b9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jean-piere-fernandez-torres
                </a>
              </div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <IconGithub />
              </div>
              <div className="contactCardText">
                <h4>GitHub</h4>
                <a
                  href="https://github.com/Fer-zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Fer-zip
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de Mensaje */}
          <div className="contactContainer">
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btnSubmit">
                Enviar mensaje
              </button>

              {isSubmitted && (
                <div className="submitSuccessMessage" role="status" aria-live="polite">
                  ✓ ¡Gracias por tu mensaje! Me pondré en contacto contigo a la
                  brevedad.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
