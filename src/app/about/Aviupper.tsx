'use client'
import React, { useState } from "react";
import Link from "next/link";

const Aviupper = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 justify-center items-center">
        <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300">
          All Products
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300">
          Plant pots
        </Link>
        <Link href="/ceramics" className="text-gray-600 hover:text-gray-800 transition duration-300">
          Ceramics
        </Link>
        <Link href="/tables" className="text-gray-600 hover:text-gray-800 transition duration-300">
          Tables
        </Link>
        <Link href="/chairs" className="text-gray-600 hover:text-gray-800 transition duration-300">
          Chairs
        </Link>
        <Link href="/crockery" className="text-gray-600 hover:text-gray-800 transition duration-300">
          Crockery
        </Link>
        <Link href="/Table-ware" className="text-gray-600 hover:text-gray-800 transition duration-300">
          Tableware
        </Link>
        <Link href="/cutlery" className="text-gray-600 hover:text-gray-800 transition duration-300">
          Cutlery
        </Link>
      </nav>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden flex justify-between items-center p-4">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <div className="flex flex-col space-y-2">
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Plant pots
            </Link>
            <Link href="/ceramics" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Ceramics
            </Link>
            <Link href="/tables" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Tables
            </Link>
            <Link href="/chairs" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Chairs
            </Link>
            <Link href="/crockery" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Crockery
            </Link>
            <Link href="/cutlery" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Cutlery
            </Link>
          </div>
        </div>
      )}

      {/* Add some global styles */}
      <style jsx>{`
        /* Optional: mobile menu transition effect */
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Aviupper;