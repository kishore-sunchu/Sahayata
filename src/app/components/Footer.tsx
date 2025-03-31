"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navLinks } from "../_common/navLinks";

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Section 1: Logo & About */}
          <div className="mb-6 md:mb-0 w-8/12">
            <Image className="text-xl font-bold text-green-600" src="/logo-without-background.png" alt={""} width='100' height='100' />
            <div className="mt-2 text-gray-400 break-words lg:w-[80%]">
              Bridging the gap between surplus food and hunger. Join us in creating a better tomorrow by reducing food waste and supporting NGOs.
            </div>
          </div>

          {/* Section 2: Links */}
          <div className="mb-6 md:mb-0 w-2/12">
            <h3 className="font-semibold text-lg text-green-500">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathName === link.href
                return (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <div
                        className={`${isActive
                          ? "text-green-600 font-semibold"
                          : "text-gray-600"
                          } hover:text-green-600`}
                      >
                        {link.name}
                      </div>
                    </Link>
                  </li>
                )
              })}
              {/* <li>
                <Link href="/">
                  <div className="hover:text-green-400">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="hover:text-green-400">About Us</div>
                </Link>
              </li>
              <li>
                <Link href="/ngos">
                  <div className="hover:text-green-400">NGOs</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="hover:text-green-400">Contact Us</div>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <div className="hover:text-green-400">Login</div>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <div className="hover:text-green-400">Register</div>
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="w-2/12 space-y-2">
            <h3 className="font-semibold text-lg text-green-500">Contact Us</h3>
            <p className="mt-2 text-gray-400">support@sahayata.com</p>
            <p className="text-gray-400">+91-9876543210</p>
            <p className="text-gray-400">123 Charity Lane, City, Country</p>
          </div>
        </div>

        {/* Section 4: Social Media & Copyright */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-green-500"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-500"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-500"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-gray-400">
            © 2024 Sahayata. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
