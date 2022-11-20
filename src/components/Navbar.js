import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import HamburgerButton from "./HamburgerButton";
import MobileNav from "./MobileNav";

export default function Navbar() {
  // Uses state to show/hide the MobileNav component
  const [display, setDisplay] = useState("none");
  const handleClick = () => {
    return display === "none" ? setDisplay("flex") : setDisplay("none");
  };

  return (
    <nav aria-label="Main Menu">
      <DesktopNav />
      <HamburgerButton onClick={handleClick} />
      <MobileNav display={display} />
    </nav>
  );
}
