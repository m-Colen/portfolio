import React from "react";
import IphoneCalc from "../images/iphone-calculator-thumbnail.PNG";
import KonaCoffee from "../images/kona-coffee-thumbnail.PNG";
import PasswordStrength from "../images/password-strength-tester.PNG";
import TipCalculator from "../images/tip-calculator-thumbnail.PNG";

export default function Portfolio() {
  const projects = [
    {
      id: 0,
      thumbnail: PasswordStrength,
      name: "Password Strength Tester",
      description: "A tool for checking the strength of a password.",
      links: [
        {
          id: 0,
          link: "https://github.com/m-Colen/password-strength-tester",
        },
        {
          id: 1,
          link: "https://m-colen.github.io/password-strength-tester/",
        },
      ],
    },
    {
      id: 1,
      thumbnail: IphoneCalc,
      name: "iPhone Calculator",
      description: "A clone build of the iPhone Calculator.",
      links: [
        {
          id: 0,
          link: "https://github.com/m-Colen/iphone-calculator",
        },
        {
          id: 1,
          link: "https://m-colen.github.io/iphone-calculator/",
        },
      ],
    },
    {
      id: 2,
      thumbnail: KonaCoffee,
      name: "Kona Coffee",
      description:
        "A clone build of the Starbucks home page (as of July 2022).",
      links: [
        {
          id: 0,
          link: "https://github.com/m-Colen/kona-coffee",
        },
        {
          id: 1,
          link: "https://m-colen.github.io/kona-coffee/",
        },
      ],
    },
    {
      id: 3,
      thumbnail: TipCalculator,
      name: "Tip Calculator",
      description: "A simple vanilla JS tip calculator project.",
      links: [
        {
          id: 0,
          link: "https://github.com/m-Colen/tip-calculator",
        },
        {
          id: 1,
          link: "https://m-colen.github.io/tip-calculator/",
        },
      ],
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="divider">
        <div className="divider__primary"></div>
        <div className="divider__circle divider__circle--right"></div>
      </div>
      <h2>Portfolio</h2>
      <div className="cards">
        {projects.map((project) => {
          return (
            <div className="card">
              <div className="card__img">
                <img src={project.thumbnail} alt={project.name}></img>
              </div>
              <div className="card__details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  <li key={project.links[1].id}>
                    <a
                      href={project.links[1].link}
                      target="_blank"
                      rel="noreferrer"
                      title={`Live view of the ${project.name} project (opens in new tab)`}
                    >
                      Live View
                      <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                    </a>
                  </li>
                  <li key={project.links[0].id}>
                    <a
                      href={project.links[0].link}
                      target="_blank"
                      rel="noreferrer"
                      title={`Github page for the ${project.name} project (opens in new tab)`}
                    >
                      GitHub Page
                      <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
