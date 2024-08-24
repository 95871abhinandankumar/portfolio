import "./projectCard.css";
export default function ProjectCard() {
  return (
    <div className="project-card">
      <img
        src="https://unsplash.com/photos/the-letter-h-is-made-up-of-gold-Nid76CO69WE"
        alt="project-image"
      />
      <div className="skills-used">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
      <div className="project-card-content">
        <h2>ChertNodes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque.
        </p>
        <div>
            <a href="/" className="github">Github  &lt; ~ &gt;</a>
            <b href="/" className="live">Live  &lt; ~ &gt;</b>
        </div>
      </div>
    </div>
  );
}
