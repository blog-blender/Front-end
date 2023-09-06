/* eslint-disable @next/next/no-img-element */
import React, { useState,useContext } from "react";
import { AuthContext } from '@/components/AuthContext';
import Link from 'next/link'
import styles from './header.module.css'
import Image from "next/image";
function NavBar() {
  let AuthData = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <Image src='/images/Screenshot__223_-removebg-preview-removebg-preview.png' alt="logo" width={75} height={75}/>
          <div className={styles.blogblinder}>
            <Link href="./"  >
              Blog Blender
            </Link>
          </div>

          {/* Menu on the right */}
          <div className="hidden md:flex space-x-4">
          <Link
              href="/"
              className="text-[#687E8D] hover:bg-[#e5e7eb] hover:text-[#312E81] px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="text-[#687E8D] hover:bg-[#e5e7eb] hover:text-[#312E81] px-3 py-2 rounded-md text-base font-medium"
            >
              Profile
            </Link>

             <span
              onClick={()=>AuthData.logout()}
              className="text-[#687E8D] hover:bg-[#e5e7eb] hover:text-[#312E81] px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </span>

             <Link
              href="/aboutPage/aboutus"
              className="text-[#687E8D] hover:bg-[#e5e7eb] hover:text-[#312E81] px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>   
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
          <Link
            href="/"
            className="text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>

          <Link
            href="/profile"
            className="text-[#0D9488] hover:bg-gray-600 hover:text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            Profile
          </Link>

          <Link
            href="/"
            onClick={()=>AuthData.logout()}
            className="text-[#0D9488] hover:bg-gray-600 hover:text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            Logout
          </Link>
          <Link
            href="./about"
            className="text-[#0D9488] hover:bg-gray-600 hover:text-[#0D9488] block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
