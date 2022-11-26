import React from "react";
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>Matt Colen</h1>
        <p>Front-end web developer.</p>
        <a className="btn btn-primary" href="#portfolio" title="My portfolio">
          Portfolio
        </a>
      </div>
      <HeroBackground />
    </div>
  );
}
