import React from "react";

export default function HamburgerButton({onClick}) {
  return (
    <button onClick={onClick} className="hamburger-btn" aria-label="Main menu" aria-expanded="false">
      <span className="hamburger-btn__top"></span>
      <span className="hamburger-btn__middle"></span>
      <span className="hamburger-btn__bottom"></span>
    </button>
  );
}
