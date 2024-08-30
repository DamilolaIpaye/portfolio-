const ProjectCard = ({ project, sno }) => {
    const { imgSrc, title, description, url } = project;
    const isEven = sno % 2 === 0;

    return (
        <div className={`project-content ${isEven ? "even" : "odd"}`}>
            <div className={`project-img ${isEven ? "even" : "odd"}`}>
                <img src={imgSrc} alt={title} />
            </div>

            <div className={`project-description ${isEven ? "even" : "odd"}`}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn-link btn-outline btn">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
