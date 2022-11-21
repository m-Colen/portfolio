import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__main">
        <h1 className="header--text-spacing">Matt Colen</h1>
        <a className="btn btn-primary" href="#portfolio" title="My portfolio">
          Portfolio
        </a>
      </div>
      <div className="hero__typewriter">
        <p className="hero__typewriter--delayOne">Hi I'm Matt.</p>
        <p className="hero__typewriter--delayTwo">
          I'm a front-end web developer.  
        </p>
        <p className="hero__typewriter--delayThree">
          I'm a front-end web developer.  
        </p>
      </div>
    </div>
  );
}
