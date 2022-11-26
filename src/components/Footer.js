import React from "react";

export default function Footer() {
  return (
    <footer>
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
    </footer>
  );
}
