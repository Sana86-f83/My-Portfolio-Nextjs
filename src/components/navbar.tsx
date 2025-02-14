'use client'

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">MyWebsite</h1>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links for Desktop */}
        <ul className={`hidden md:flex space-x-6`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Links for Mobile */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-700 text-center space-y-4 p-4`}
      >
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
          <Link href="/services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
