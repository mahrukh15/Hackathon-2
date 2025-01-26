'use client'
import React from "react";
import Link from "next/link";

const Upperheader = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="hidden md:flex  justify-center items-center text-center space-x-12    ">
        {/* Hidden on small screens, flex on medium and up */}
        <Link href="/plant-pots" className="text-gray-600 hover:text-gray-800 transition duration-300">
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
      </nav>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden flex justify-between items-center p-4">
        <a href="#mobile-menu" className="text-gray-600 hover:text-gray-800 focus:outline-none">
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden bg-white shadow-md hidden">
        <div className="flex flex-col space-y-2 p-4">
          <Link href="/plant-pots" className="text-gray-600 hover:text-gray-800 transition duration-300">
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

      {/* CSS to handle the mobile menu visibility */}
      <style jsx>{`
        #mobile-menu:target {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Upperheader;