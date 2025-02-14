"use client";
import Link from "next/link";
import "../style/header.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">Sana Faisal</div>

      {/* Hamburger Icon */}
      <div className="header-rightdiv">
      <div className="hambergerIcon" onClick={toggleMenu}>
      <GiHamburgerMenu size={30}/>
      </div>

        {/* links for desktop */}{" "}
        <ul className="header-links">
          {" "}
          <li>
            {" "}
            <Link className="active" href="/">
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link className="navbar-li" href={"/about"}>
              About{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link className="navbar-li" href={"/myProjects"}>
              Projects{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link className="navbar-li" href={"/contact"}>
              {" "}
              Contact
            </Link>
          </li>
          <li>
            {" "}
            <Link className="navbar-li" href={"/skills"}>
              {" "}
              Skills
            </Link>
          </li>

        </ul>
      </div>

      {/* Links for Mobile */}
      {isOpen && (
        <div className="mobile-links">
          <ul>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/myProjects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
