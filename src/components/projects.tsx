import React from "react";
import "../style/projects.css";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <main className="main-project">
      <div className="project-container">
        {/* top-div */}
        <div className="top-div-project">
          <h1 className="title-project">My Projects</h1>
          <p className="des-project">
            "My portfolio showcases diverse projects completed using HTML, CSS,
            TypeScript, Next.js, and Tailwind CSS. I'm passionate about
            expanding my skills and taking on more innovative challenges."
          </p>
        </div>
        {/* bottom-div */}
        <div className="boxes-cont">
          <div className="box">
            <Image
              src={"/Images/simple-Calculator.jpg"}
              width={300}
              height={300}
              className="project-image"
              alt="Simple-Calculator"
            />
            <div className="overlay">
              <Link
                href="https://html-calculator-by-sf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-link"
              >
                View Project html/Css/typescript
              </Link>
            </div>
          </div>

          <div className="box">
            <Image
              src={"/Images/digital-clock.jpg"}
              width={300}
              height={300}
              className="project-image"
              alt="digital-clock"
            />
            <div className="overlay">
              <Link
                href="https://digital-clock-by-sfaisal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-link"
              >
                View Project html/Css/typescript
                </Link>
            </div>
          </div>
          <div className="box">
            <Image
              src={"/Images/resume-builder.png"}
              width={300}
              height={300}
              className="project-image"
              alt="Resume-Builder"
            />
            <div className="overlay">
              <Link
                href="https://milestone1-static-resume-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-link"
              >
                View Project Nextjs/TailwindCss
                </Link>
            </div>
          </div>

          <div className="box">
            <Image
              src={"/Images/todo-list.jpg"}
              width={300}
              height={300}
              className="project-image"
              alt="TO_Do List"
            />
            <div className="overlay">
              <Link
                href="https://todo-app-sanafaisal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-link"
              >
                View Project Nextjs/TailwindCss
              </Link>
            </div>
          </div>
          <div className="box">
            <Image
              src={"/Images/facebook-clone.jpg"}
              width={300}
              height={300}
              className="project-image"
              alt="Facebook-clone"
            />
            <div className="overlay">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="pro-link"
              >
                View Project Nextjs/TailwindCss
                </Link>
            </div>
          </div>
          <div className="box">
            <Image
              src={"/Images/stop-watch.png"}
              width={300}
              height={300}
              className="project-image"
              alt="stop-watch-image"
            />
            <div className="overlay">
              <Link
                href="https://html-stop-watch-by-sfaisal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-link"
              >
                View Project html/Css/typescript
                </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
