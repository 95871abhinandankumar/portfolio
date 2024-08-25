import "./header.css";
import Logo from "./logo";
import { useTranslation } from "react-i18next";
import github from "../assets/images/Github.svg";
import linkedin from "../assets/images/Linkedin.svg";
import twitter from "../assets/images/Twitter.svg";
import { useState, useEffect } from "react";

const socialMedia = {
    github: "https://github.com/95871abhinandankumar/",
    linkedin: "https://www.linkedin.com/in/abhinandan-kumar-6077291a6/",
    twitter: "https://twitter.com",
  };

export default function Header({
  onProjectClick,
  onContactClick,
  onAboutClick,
}) {
  const { t, i18n } = useTranslation();
  const [navVisible, setNavVisible] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if(navVisible) {
        expandShrinkBurger();
    }
  };

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function expandShrinkBurger(){
    setNavVisible(setNavVisible => !setNavVisible);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
    };

    // Set initial visibility based on window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <Logo />
      <ul className="nav" style={{ display: navVisible ? 'flex' : 'none' }}>
        <li>
          <a href="/" onClick={scrollToTop}>
            <span>#</span>
            {t("buttons.home")}
          </a>
        </li>
        <li>
          <a
            href="/works"
            onClick={(e) => {
              e.preventDefault();
              onProjectClick();
            }}
          >
            <span>#</span>
            {t("buttons.works")}
          </a>
        </li>
        <li>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              onAboutClick();
            }}
          >
            <span>#</span>
            {t("buttons.about")}
          </a>
        </li>
        <li>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
          >
            <span>#</span>
            {t("buttons.contacts")}
          </a>
        </li>
        <li>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="hi">HI</option>
          </select>
        </li>

        <li className="mobile-view">
            <a href={socialMedia.github}>
            <img src={github} alt="github" />
            </a>
            <a href={socialMedia.linkedin}>
            <img src={linkedin} alt="linkedin" />
            </a>
            <a href={socialMedia.twitter}>
            <img src={twitter} alt="twitter" />
            </a>
        </li>
      </ul>
      <div className="burger" onClick={expandShrinkBurger}>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </header>
  );
}
