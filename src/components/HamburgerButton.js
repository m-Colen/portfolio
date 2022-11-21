import React from "react";

export default function HamburgerButton({
  onClick,
  topAnimation,
  middleAnimation,
  bottomAnimation,
  expanded,
}) {
  return (
    <button
      onClick={onClick}
      className="hamburger-btn"
      aria-label="Main menu"
      aria-expanded={expanded}
      aria-controls="mobile-nav"
    >
      <span className={topAnimation}></span>
      <span className={middleAnimation}></span>
      <span className={bottomAnimation}></span>
    </button>
  );
}
