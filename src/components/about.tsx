import React from "react";
import Image from "next/image";
import "../style/about.css";
import "../style/hero.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <div className="hero-container">
      <div className="hero-boxes-cont">
        {/* leftside */}
        <div>
          <Image
            src={"/images/about-image.jpg"}
            width={200}
            height={200}
            className="about-image"
            alt="profilePic"
          />
        </div>
        {/* rightSide */}
        <div className="aboutdiv-text">
          <h1 className="about-logo">About Me</h1>
          <p className="hero-desc1">
            I am a motivated and dedicated individual with a solid educational
            foundation and a passion for continuous learning. Having completed
            my Intermediate, I am currently advancing my technical skills by
            pursuing an IT course. My journey in IT, particularly through the UP
            IT program, has been marked by a strong commitment to understanding
            the latest tools and technologies.
            {/* I approach every challenge with
            determination, eager to contribute effectively and make a meaningful
            impact in the tech field. My focus, diligence, and enthusiasm for
            growth drive me to excel in every project I undertake. */}
          </p>
          <p className="hero-desc2">
            I am a motivated individual with a solid educational background,
            having completed my Intermediate. Currently, I am enhancing my
            technical skills through the UP IT program, focusing on modern tools
            and technologies.
            {/* My dedication and passion for learning drive me to
            excel in every challenge. */}
          </p>
          <span className="aboutIcons">
            <Link
              href={"https://www.linkedin.com/in/sana-faisal-developer/"}
              target={"_blank"}
            >
              <FaLinkedin className="linkedinIcon" />
            </Link>
            <Link href={"https://github.com/Sana86-f83"} target={"_blank"}>
              <FaGithubSquare className="githubIcon" />
            </Link>
            <Link href={"/"} target={"_blank"}>
              {" "}
              <FaWhatsappSquare className="whatsappIcon" />
            </Link>
            <Link
              href={"https://vercel.com/sana-faisals-projects-5694f94c"}
              target={"_blank"}
            >
              {" "}
              <SiVercel className="vercelIcon" />
            </Link>
            <Link
              href={"https://web.facebook.com/?_rdc=1&_rdr"}
              target={"_blank"}
            >
              {" "}
              <FaFacebookSquare className="facebookIcon" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
