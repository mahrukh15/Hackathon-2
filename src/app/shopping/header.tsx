import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 md:px-12 lg:px-24 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Search Icon */}
        <div className="flex items-center">
          <CiSearch size={24} className="text-black" />
        </div>

        {/* Center Section: Logo/Brand */}
        <div>
          <Link href="/" className="text-xl font-bold text-gray-800">
            Avion
          </Link>
        </div>

        {/* Right Section: Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          <IoCartOutline size={24} className="text-black" />
          <IoPersonCircleOutline size={24} className="text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;