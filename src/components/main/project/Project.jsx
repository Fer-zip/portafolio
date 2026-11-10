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
          src={project.image || project.images?.[0]}
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
    </article>
  );
};

export default Project;
