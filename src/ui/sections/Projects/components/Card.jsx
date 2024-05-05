export default function Card({ thumbnail, stacks, description, gitHub, url, name }) {
  return (
    <div className="project">
      <div className="project-wrapper">
        <img className="project-image" src={thumbnail} />
        <div className="project-description">
          <h3 className="project-description-title">{name}</h3>
          <h4 className="project-description-sub-title">
            {stacks.slice("").join(", ")}
          </h4>
          <p className="project-description-para">{description}</p>
          <div className="project-description-links-wrapper">
            <div className="project-description-links">
              <a
                href={gitHub}
                target="_blank"
                className="project-description-link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="project-description-links">
              <a
                href={url}
                target="_blank"
                className="project-description-link"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
