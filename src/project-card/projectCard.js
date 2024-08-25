import "./projectCard.css";
import { useTranslation } from "react-i18next";
export default function ProjectCard({ index, project }) {
  const { t } = useTranslation();
  return (
    <div className="project-card">
      <img src={t(project.image)} alt="project-image" />
      <div className="skills-used">
        {project.techUsed.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-card-content">
        <h2>{t(`projects.project${index}.name`)}</h2>
        <p>{t(`projects.project${index}.description`)}</p>
        <div>
          <a href={project.github} className="github">
            {t("buttons.github")} &lt; ~ &gt;
          </a>
          <a href={project.liveUrl} className="live">
            {t("buttons.live")} &lt; ~ &gt;
          </a>
        </div>
      </div>
    </div>
  );
}
