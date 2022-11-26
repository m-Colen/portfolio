import React from "react";

export default function MobileNav({ display, onClick }) {
  return (
    <ul
      style={{ display }}
      id="mobile-nav"
      className="mobile-nav slide-in-left"
    >
      <li onClick={onClick} key="0">
        <a href="#about" title="Learn more about me">
          About me
        </a>
      </li>
      <li onClick={onClick} key="1">
        <a href="#portfolio" title="My portfolio">
          Portfolio
        </a>
      </li>
      <li onClick={onClick} key="2">
        <a href="#contact" title="Contact me">
          Contact
        </a>
      </li>
      <li onClick={onClick} key="3">
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
      <li onClick={onClick} key="4">
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
  );
}
