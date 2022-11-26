import React from "react";
import Hero from "../images/hero.jpg";

export default function About() {
  const techStack = [
    "JavaScript",
    "CSS",
    "HTML",
    "Git",
    "GitHub",
    "Command Line",
    "Mocha",
    "Figma",
  ];
  const techStackObjs = techStack.map((skill, index) => {
    return {
      id: index,
      skill: skill,
    };
  });

  const currentlyLearning = ["React", "Photoshop", "Illustrator"];
  const currentlyLearningObjs = currentlyLearning.map((skill, index) => {
    return {
      id: index,
      skill: skill,
    };
  });
  return (
    <section id="about">
      <div className="divider divider--black divider--left"></div>
      <h2>About Me</h2>
      <div className="about">
        <div className="about-wrapper">
          <div className="about__images">
            <img src={Hero} alt="Matt Colen with trees in the background" />
          </div>
          <div className="about__details">
            <ul>
              <li key="0">
                <p>
                  Hi, I'm Matt. I'm a web developer & designer based in
                  Missouri. I currently work for the State as an operational
                  excellence (Op-Ex) manager. Thus, I have a lot of expertise in
                  creating solutions that provide a good user experience.
                </p>
                <hr></hr>
              </li>
              <li key="1">
                <h3>Tech Stack:</h3>
                <ul>
                  {techStackObjs.map((skill) => {
                    return <li key={skill.id}>{skill.skill}</li>;
                  })}
                </ul>
              </li>
              <li key="2">
                <h3>Currently Learning:</h3>
                <ul>
                  {currentlyLearningObjs.map((skill) => {
                    return <li key={skill.id}>{skill.skill}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__links">
          <div className="about__links--internal">
            <ul>
              <li key="0">
                <a
                  className="btn btn-primary"
                  href="#contact"
                  title="Contact me"
                >
                  Say Hello
                </a>
              </li>
            </ul>
          </div>
          <div className="about__links--external">
            <ul>
              <li key="0">
                <a
                  className="nav-links--external"
                  href="https://www.linkedin.com/in/matthew-colen-061650209/"
                  target="_blank"
                  title="My LinkedIn (Opens in new tab)"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li key="1">
                <a
                  className="nav-links--external"
                  href="https://github.com/m-Colen"
                  target="_blank"
                  title="My GitHub (Opens in new tab)"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
