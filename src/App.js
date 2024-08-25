import React from "react";
import "./App.css";
import Header from "./header/header";
import sideImage from "./assets/images/side-image.png";
import quote from "./assets/images/quote.png";
import ProjectCard from "./project-card/projectCard";
import skillSideImage from "./assets/images/skill-side-image.png";
import SkillCard from "./skill-card/skillCard";
import aboutMeImage from "./assets/images/about-me-img.png";
import Logo from "./header/logo";
import email from "./assets/images/email.png";
import github from "./assets/images/Github.svg";
import linkedin from "./assets/images/Linkedin.svg";
import twitter from "./assets/images/Twitter.svg";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import grabit from "./assets/project-image/grabit.png";
import portfolio from "./assets/project-image/portfolio.jpg";
import realestate from "./assets/project-image/realestate.png";
import wine from "./assets/project-image/wine.png";
import hack4earth from "./assets/project-image/hack4earth.jpeg";

const projects = [
  {
    image: grabit,
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Django",
      "Bootstrap",
      "SQLite",
    ],
    name: "Grabit",
    description:
      "An online marketplace tailored for the Institute during the COVID-19 pandemic, designed to minimize physical interactions by enabling multi-photo ad postings, detailed product views, and integrated chat and support features.",
    github: "https://github.com/95871abhinandankumar/grabit_project",
    liveUrl: "https://google.com",
  },
  {
    image: wine,
    techUsed: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Matplotlib"],
    name: "Wine Quality Prediction",
    description:
      "A predictive model for wine quality using Logistic Regression, based on a dataset from the UCI Machine Learning Repository. The model achieved an accuracy of up to 90%, providing reliable insights into wine quality.",
    github:
      "https://github.com/95871abhinandankumar/MINI_PROJECT_wine_quality_prediction",
    liveUrl: "https://google.com",
  },
  {
    image: hack4earth,
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Django",
      "Bootstrap",
      "SQLite",
    ],
    name: "Hack4Earth",
    description:
      "A microblogging platform developed in just 7 days for the Hack for Earth Hackathon, allowing users to share ideas and initiatives related to our institution’s cleanliness drive. Achieved a top-three ranking in the competition.",
    github: "https://github.com/95871abhinandankumar/hack4earth",
    liveUrl: "https://google.com",
  },
  {
    image: realestate,
    techUsed: ["Java", "JDBC", "MySQL"],
    name: "Real Estate Office",
    description:
      "A database management system designed and implemented for a real estate office, facilitating agents in efficiently managing and selling properties within a city.",
    github:
      "https://github.com/95871abhinandankumar/real-Esatate-project-using-Mysql-and-java",
    liveUrl: "https://google.com",
  },
  {
    image: portfolio, // Replace with actual image URL
    techUsed: ["React", "JavaScript", "CSS", "HTML"],
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing my work, skills, and achievements. It provides an overview of my professional background and serves as a platform to showcase my projects and accomplishments.",
    github: "https://github.com/95871abhinandankumar/portfolio",
    liveUrl: "https://your-portfolio.com",
  },
];

const skills = {
  languages: ["Java", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  databases: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"],
  tools: [
    "React",
    "Node.js",
    "Git",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Figma",
  ],
  frameworks: ["Angular", "Spring Boot", "Django", "Bootstrap"],
  others: ["AWS", "Redis", "Jira", "Jupyter Notebook", "Matplotlib"],
};

const socialMedia = {
  github: "https://github.com/95871abhinandankumar/",
  linkedin: "https://www.linkedin.com/in/abhinandan-kumar-6077291a6/",
  twitter: "https://twitter.com",
};

function App() {
  const { t } = useTranslation();
  const [projectCount, setProjectCount] = useState(3);
  const projectsRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const handleViewAllClick = (e) => {
    e.preventDefault();
    setProjectCount(projects.length);
    projectsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the projects section
  };

  const convertToJSX = (text) => {
    return text.split("<br>").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("<br>").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="wrapper">
      <aside className="sidebar">
        <div className="vertical-line"></div>
        <a href={socialMedia.github}>
          <img src={github} alt="github" />
        </a>
        <a href={socialMedia.linkedin}>
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href={socialMedia.twitter}>
          <img src={twitter} alt="twitter" />
        </a>
      </aside>
      <div className="container">
        <Header
          onProjectClick={() => scrollToSection(projectsRef)}
          onContactClick={() => scrollToSection(contactSectionRef)}
          onAboutClick={() => scrollToSection(aboutSectionRef)}
        />
        <main className="main">
          <section className="first">
            <div className="first-content">
              <h1>
                {t("thumbnail.headerPart1")}{" "}
                <strong>{t("thumbnail.headerPart2")}</strong>
              </h1>
              <p>{t("thumbnail.description")}</p>
              <button onClick={() => scrollToSection(contactSectionRef)}>{t("buttons.contactMe")} !!</button>
            </div>
            <div className="first-content-with-image">
              <img src={sideImage} alt="side-image" />
            </div>
          </section>
          <section className="quote">
            <img src={quote} alt="quote" className="quote-image" />
          </section>
          <section className="projects" ref={projectsRef}>
            <div className="projects-header">
              <h2>
                <span className="span-inside-h2">#</span>
                {t("buttons.projects")}
              </h2>
              <hr />
              <a href="/projects" onClick={handleViewAllClick}>
                {t("buttons.viewAll")} ~~&gt;
              </a>
            </div>
            <div className="projects-body">
              {projects.map((project, index) =>
                index < projectCount ? (
                  <ProjectCard
                    key={index + 1}
                    index={index + 1}
                    project={project}
                  />
                ) : null
              )}
            </div>
          </section>

          <section className="skills">
            <div className="skills-header">
              <h2>
                <span className="span-inside-h2">#</span>
                {t("buttons.skills")}
              </h2>
              <hr />
            </div>
            <div className="skills-body">
              <img src={skillSideImage} alt="skill-side-image" />
              <div className="skills-body-content">
                <SkillCard
                  skillType={"Languages"}
                  skillObject={skills.languages}
                />
                <div className="skills-body-content-box-1">
                  <SkillCard
                    skillType={"Databases"}
                    skillObject={skills.databases}
                  />
                  <SkillCard skillType={"Other"} skillObject={skills.others} />
                </div>
                <div className="skills-body-content-box-2">
                  <SkillCard skillType={"Tools"} skillObject={skills.tools} />
                  <SkillCard
                    skillType={"Frameworks"}
                    skillObject={skills.frameworks}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="about-me" ref={aboutSectionRef}>
            <div className="about-me-content">
              <div className="about-me-content-header">
                <h2>
                  <span className="span-inside-h2">#</span>
                  {t("buttons.about")}
                </h2>
                <hr />
              </div>
              <div className="about-me-content-body">
                <p>{convertToJSX(t("about.description"))}</p>
                <button className="read-more" onClick={()=>(window.location.href=socialMedia.linkedin)} >{t("buttons.readMore")}</button>
              </div>
            </div>
            <img src={aboutMeImage} alt="about-me-side-image" />
          </section>

          <section className="contacts" ref={contactSectionRef}>
            <div className="contacts-header">
              <h2>
                <span className="span-inside-h2">#</span>
                {t("buttons.contacts")}
              </h2>
              <hr />
            </div>
            <div className="contacts-body">
              <div className="contacts-body-left">
                {convertToJSX(t("contact.description"))}
              </div>
              <div className="contacts-detail-content">
                <div className="contacts-detail-content-header">
                  Message me here
                </div>
                <div className="contacts-detail-content-body">
                  <span className="email">
                    <img src={email} alt="email-logo" /> {t("contact.email")}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <hr className="footer-seprator"></hr>
          <div className="footer-content">
            <div className="footer-content-about">
              <span>
                <Logo />{" "}
                <span className="footer-content-about-email">
                  {t("contact.email")}
                </span>
              </span>
              <span>{t("currentRole")}</span>
            </div>
            <div className="footer-content-social-media">
              <h2>Media</h2>
              <a href={socialMedia.github}>
                <img src={github} alt="github" />
              </a>
              <a href={socialMedia.linkedin}>
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href={socialMedia.twitter}>
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
          <span>© Copyright 2024. Made by Abhinandan</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
