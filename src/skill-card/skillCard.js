import "./skillCard.css";
export default function SkillCard({ skillType, skillObject }) {
  return (
    <div className="skill-card">
      <span className="skill-card-header">{skillType}</span>
      <span className="skill-card-body">
        {skillObject.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </span>
    </div>
  );
}
