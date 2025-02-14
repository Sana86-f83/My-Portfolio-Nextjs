"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-boxes-cont">
        {/* leftside */}
        <div>
          <Image
            src={"/Images/profilepic-herosec.png"}
            width={200}
            height={200}
            className="hero-image"
            alt="profilePic"
          />
        </div>
        {/* rightSide */}
        <div className="rightdiv-text">
          <h1 className="title-hero">
            I'm
            <Typewriter
              options={{
                strings: [
                  "Sana Faisal",
                  "Front-End Developer",
                  "UI/UX Designer",
                  "Web Application Creator",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="hero-desc">
            ”I create responsive, user-friendly web applications using the
            latest technologies like TypeScript, React, Next, and Tailwind CSS.
            Passionate about building digital experiences that make a
            difference.”
          </p>
          <button className="hireMe">Hire Me</button>
          <button className="my-resume">My Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
