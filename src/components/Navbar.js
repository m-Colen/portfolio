import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import HamburgerButton from "./HamburgerButton";
import MobileNav from "./MobileNav";

export default function Navbar() {
  // Uses state to show/hide the MobileNav component
  const [display, setDisplay] = useState("none");
  const [hamBtnTop, setHamBtnTop] = useState("");
  const [hamBtnMiddle, setHamBtnMiddle] = useState("");
  const [hamBtnBottom, setHamBtnBottom] = useState("");
  const [expanded, setExpanded] = useState("false");
  const handleClick = () => {
    display === "none" ? setDisplay("flex") : setDisplay("none");
    hamBtnTop === "" ? setHamBtnTop("expanded-top") : setHamBtnTop("");
    hamBtnMiddle === ""
      ? setHamBtnMiddle("expanded-middle")
      : setHamBtnMiddle("");
    hamBtnBottom === ""
      ? setHamBtnBottom("expanded-bottom")
      : setHamBtnBottom("");
    expanded === "false" ? setExpanded("true") : setExpanded("false");
    document.body.classList.toggle("stop-scrolling");
  };

  return (
    <nav aria-label="Main Menu">
      <DesktopNav />
      <HamburgerButton
        onClick={handleClick}
        topAnimation={hamBtnTop}
        middleAnimation={hamBtnMiddle}
        bottomAnimation={hamBtnBottom}
        expanded={expanded}
      />
      <MobileNav display={display} onClick={handleClick} />
    </nav>
  );
}
