"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../_common/navLinks";
import Logo from "../assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Logo} className="h-16" alt="logo of the sahayata" width={110} />
            </Link>
          </div>

          {/* Links for Large Screens */}
          <div className="hidden md:flex space-x-6 lg:text-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.name} href={link.href}>
                  <div
                    className={`${isActive
                      ? "text-green-600 font-semibold"
                      : "text-gray-600"
                      } hover:text-green-600`}
                  >
                    {link.name}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Hamburger for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <div className="md:hidden pt-2" onBlur={() => setIsOpen(!isOpen)}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.name} href={link.href} className="">
                  <div
                    className={`${isActive
                      ? "text-green-600 font-semibold"
                      : "text-gray-600"
                      } hover:text-green-600 py-1.5`}
                  >
                    {link.name}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
