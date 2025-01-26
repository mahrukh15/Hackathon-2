'use client'
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="border-b-2 border-gray-600">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <div className="text-xl font-semibold">Avion</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              className="h-6 w-6 text-gray-600 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FiMenu
              className="h-6 w-6 text-gray-600 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-white z-10 p-4 shadow-lg transition-transform transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:static md:flex md:items-center md:space-x-10 md:translate-y-0 md:shadow-none`}
        >
          <a
            href="/about"
            className="block text-gray-600 hover:text-gray-800 py-2 md:py-0"
          >
            About us
          </a>
          <a
            href="/contact"
            className="block text-gray-600 hover:text-gray-800 py-2 md:py-0"
          >
            Contact
          </a>
          <a
            href="/blog"
            className="block text-gray-600 hover:text-gray-800 py-2 md:py-0"
          >
            Blog
          </a>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <CiSearch className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
          
          <IoCartOutline className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
          
          <IoPersonCircleOutline className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Icons and Menu */}
      <div className="flex items-center justify-between space-x-4 py-2 md:hidden">
        <CiSearch className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <IoCartOutline className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <IoPersonCircleOutline className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;