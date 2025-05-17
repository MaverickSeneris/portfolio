import { FaGithub, FaLink } from "react-icons/fa";

export default function Card({
  thumbnail,
  stacks,
  description,
  gitHub,
  url,
  name,
}) {
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
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <div className="project-description-links">
              <a
                href={url}
                target="_blank"
                className="project-description-link"
                rel="noopener noreferrer"
              >
                <FaLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
