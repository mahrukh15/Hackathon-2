'use Client'
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white py-4 border-b border-gray-200 sticky top-0 z-50"> {/* Added sticky and z-index */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Avion
        </Link>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="text-gray-600 hover:text-gray-800 block py-2">
              About us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 block py-2">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800 block py-2">
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;