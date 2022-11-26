import React from "react";
import Hero from "../images/hero.jpg";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about">
        <div className="about-wrapper">
          <div className="about__images">
            <img src={Hero} alt="Matt Colen with trees in the background" />
          </div>
          <div className="about__details">
            <ul>
              <li>
                <h3>Things I Love:</h3>
                <ul>
                  <li>Front-end web development</li>
                  <li>Electric guitar (I love Fender offset guitars)</li>
                  <li>Classic rock</li>
                  <li>Rocket League</li>
                </ul>
              </li>
              <li>
                <h3>Tech Stack:</h3>
                <ul>
                  <li>JavaScript (Vanilla)</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Command Line (Git Bash)</li>
                  <li>Mocha</li>
                </ul>
              </li>
              <li>
                <h3>Currently Learning/Completing:</h3>
                <ul>
                  <li>React</li>
                  <li>CodeCademy - Front End Engineer Certificate</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__links">
          <div className="about__links--internal">
            <ul>
              <li>
                <a class="btn btn-primary" href="#contact" title="Contact me">
                  Say Hello
                </a>
              </li>
            </ul>
          </div>
          <div className="about__links--external">
            <ul>
              <li>
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
              <li>
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
