import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#161625] text-white py-8 px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">New arrivals</a></li>
              <li><a href="#" className="hover:underline">Best sellers</a></li>
              <li><a href="#" className="hover:underline">Recently viewed</a></li>
              <li><a href="#" className="hover:underline">Popular this week</a></li>
              <li><a href="#" className="hover:underline">All products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">Crockery</a></li>
              <li><a href="#" className="hover:underline">Furniture</a></li>
              <li><a href="#" className="hover:underline">Homeware</a></li>
              <li><a href="#" className="hover:underline">Plant pots</a></li>
              <li><a href="#" className="hover:underline">Chairs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our company</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Vacancies</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Returns policy</a></li>
            </ul>
          </div>
          <div>
            <label htmlFor="footer-email" className="block text-sm sm:text-base mb-2">
              Join our mailing list
            </label>
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
              <input
                type="email"
                id="footer-email"
                placeholder="your@email.com"
                className="w-full sm:w-3/4 px-4 py-2 bg-gray-700 text-gray-300 rounded-md sm:rounded-l-md border-none outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-white text-black font-medium rounded-md sm:rounded-r-md hover:bg-gray-300"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Avion LTD</span>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75"><FaLinkedin size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-75"><FaFacebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75"><FaInstagram size={20} /></a>
            <a href="#" aria-label="Skype" className="hover:opacity-75"><FaSkype size={20} /></a>
            <a href="#" aria-label="Pinterest" className="hover:opacity-75"><FaPinterest size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
