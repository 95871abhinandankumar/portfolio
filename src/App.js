import "./App.css";
import Header from "./header/header";
import sideImage from "./assets/images/side-image.png";
import quote from "./assets/images/quote.png";
import ProjectCard from "./project-card/projectCard";
import skillSideImage from "./assets/images/skill-side-image.png";
import SkillCard from "./skill-card/skillCard";
import aboutMeImage from "./assets/images/about-me-img.png";
import Logo from "./header/logo";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="main">
          <section className="first">
            <div className="first-content">
              <h1>
                Abhinandan is a <strong>full-stack developer</strong>
              </h1>
              <p>
                He crafts responsive websites where technologies meet creativity
              </p>
              <button>Contact me !!</button>
            </div>
            <div className="first-content-with-image">
              <img src={sideImage} alt="side-image" />
            </div>
          </section>
          <section className="quote">
            <img src={quote} alt="quote" className="quote-image" />
          </section>
          <section className="projects">
            <div className="projects-header">
              <h2>
                <span className="span-inside-h2">#</span>projects
              </h2>
              <hr />
              <a href="/works">View All ~~&gt;</a>
            </div>
            <div className="projects-body">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </section>

          <section className="skills">
            <div className="skills-header">
              <h2>
                <span className="span-inside-h2">#</span>skills
              </h2>
              <hr />
            </div>
            <div className="skills-body">
              <img src={skillSideImage} alt="skill-side-image" />
              <div className="skills-body-content">
                <SkillCard />
                <div className="skills-body-content-box-1">
                  <SkillCard />
                  <SkillCard />
                </div>
                <div className="skills-body-content-box-2">
                  <SkillCard />
                  <SkillCard />
                  <SkillCard />
                </div>
              </div>
            </div>
          </section>

          <section className="about-me">
            <div className="about-me-content">
              <div className="about-me-content-header">
                <h2>
                  <span className="span-inside-h2">#</span>about-me
                </h2>
                <hr />
              </div>
              <div className="about-me-content-body">
                <p>
                  Hello, i’m Elias! I’m a self-taught front-end developer based
                  in Kyiv, Ukraine. I can develop responsive websites from
                  scratch and raise them into modern user-friendly web
                  experiences. Transforming my creativity and knowledge into a
                  websites has been my passion for over a year. I have been
                  helping various clients to establish their presence online. I
                  always strive to learn about the newest technologies and
                  frameworks.
                </p>
                <button className="read-more">Read more</button>
              </div>
            </div>
            <img src={aboutMeImage} alt="about-me-side-image" />
          </section>

          <section className="contacts">
            <div className="contacts-header">
              <h2><span className="span-inside-h2">#</span>Contacts</h2>
              <hr />
            </div>
            <div className="contacts-body">
              <div className="contacts-body-left">
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </div>
                <div className="contacts-detail-content">
                  <div className="contacts-detail-content-header">
                    Message me here
                  </div>
                  <div className="contacts-detail-content-body">
                    <span>logo: abhinandank626@gmail.com</span>
                  </div>
                </div>
              </div>
          </section>
        </main>
        <footer>
          <div className="footer-content">
            <div className="footer-content-about">
              <span>
                <Logo /> <span>abhinandank626@gmail.com</span>
              </span>
              <span>Web designer and front-end developer</span>
            </div>
            <div className="footer-content-social-media">
              <h2>Media</h2>
              <a href="https://www.linkedin.com/in/abhinandan-kumar-6b7b0b1b2/">
                <i className="fab fa-linkedin"></i>
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
