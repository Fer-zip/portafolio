import { useState } from "react";
import "./contact.css";
import IconMail from "../../../assets/IconMail.jsx";
import IconWhatsApp from "../../../assets/IconWhatsApp.jsx";
import IconLinkedin from "../../../assets/IconLinkedin.jsx";
import IconGithub from "../../../assets/IconGithub.jsx";

// Si existe VITE_FORMSPREE_ID en .env usa Formspree; de lo contrario envía directamente a tu Gmail mediante FormSubmit
const CONTACT_ENDPOINT = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : "https://formsubmit.co/ajax/jeanpierefernandez80@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} desde tu Portafolio`,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === "true" || data.ok || !data.error)) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 6000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data?.message ||
            data?.errors?.map((err) => err.message).join(", ") ||
            "Hubo un inconveniente al enviar el mensaje. Por favor intenta de nuevo.",
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(
        "No se pudo conectar con el servidor de correo. Puedes contactarme directamente a jeanpierefernandez80@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
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
                  jeanpierefernandez80
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
                  +51 979740xxx
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
              <button
                type="submit"
                className="btnSubmit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              {submitStatus === "success" && (
                <div
                  className="submitSuccessMessage"
                  role="status"
                  aria-live="polite"
                >
                  ✓ ¡Gracias por tu mensaje! Me pondré en contacto contigo a la
                  brevedad.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="submitErrorMessage"
                  role="alert"
                  aria-live="assertive"
                >
                  ✕ {errorMessage}
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
