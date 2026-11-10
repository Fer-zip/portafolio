import "./project.css";

const Project = ({ project, index = 0, handleModal }) => {
  return (
    <article
      className="ctnProyectCard"
      data-reveal
      style={{ "--reveal-delay": `${index * 90}ms` }}
      onClick={() => handleModal(project)}
    >
      <div className="ctnImg">
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.name}`}
          loading="lazy"
        />
        {project.company && (
          <span className="cardCompany">{project.company}</span>
        )}
      </div>
      <div className="ctnText">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="cardTechs">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="cardTechBadge">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="ctnBtn">
        <button
          type="button"
          className="btnShowMore"
          aria-label={`Ver detalles del proyecto ${project.name}`}
          onClick={(event) => {
            event.stopPropagation();
            handleModal(project);
          }}
        >
          Ver detalles <span>→</span>
        </button>
      </div>
    </article>
  );
};

export default Project;
