import React from "react";

export default function DesktopNav() {
  return (
    <ul className="desktop-nav">
      <li className="desktop-nav__logo">
        <a href="index.html" title="Home page">
          <i className="fa-solid fa-house"></i>
        </a>
      </li>
      <li>
        <ul className="nav-links">
          <li>
            <a href="#about" title="Learn more about me">
              About me
            </a>
          </li>
          <li>
            <a href="#portfolio" title="My portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" title="Contact me">
              Contact
            </a>
          </li>
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
      </li>
    </ul>
  );
}
