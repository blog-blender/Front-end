import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="/" className="text-[#0D9488] text-lg font-semibold">
              Social Media
            </a>
          </div>

          {/* Menu on the right */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-[#0D9488] hover:bg-[#e5e7eb] hover:text-[#0D9488] px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#0D9488] hover:bg-[#e5e7eb] hover:text-[#0D9488] px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#0D9488] hover:bg-[#e5e7eb] hover:text-[#0D9488] px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#0D9488] hover:bg-[#e5e7eb] hover:text-[#0D9488] px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0D9488] hover:text-[#0D9488] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#e5e7eb]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#0D9488] hover:bg-gray-600 hover:text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#0D9488] hover:bg-gray-600 hover:text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-[#0D9488] hover:bg-gray-600 hover:text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
