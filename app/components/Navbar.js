'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="textcolor flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-5xl hover:scale-110 transition-transform ease-in-out duration-75 font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </Link>

        {/* Hamburger / X Button */}
        <button
          onClick={toggleMenu}
          ref={buttonRef}
          type="button"
          className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {menuOpen ? (
            // X icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex md:text-2xl items-center flex-row font-medium space-x-8">
            <li className='flex '>
              <Link href="/" className="a text-white textcolor">
               Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="a text-white textcolor">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="a text-white textcolor">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="a text-white textcolor">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-15 right-0   text-white z-10 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="flex items-end flex-col mt-10 space-y-6 px-6 text-xl">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <svg className="icon" viewBox="0 0 93 102" fill="#39D4DF" xmlns="http://www.w3.org/2000/svg" height="64" width="64" strokeWidth="3px" strokeLinecap="round" strokeLinejoin="round"><path d="M45.97 50.1951V85.6851L30.51 76.7551V55.4651L18.14 48.3151V69.6151L2.66992 60.6851V25.1951L22.6699 20.3551L24.3199 19.9551L38.14 39.2551L45.97 50.1951Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M50.5098 47.905V47.925H50.5198V47.905H50.5098Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M30.51 13.2949V16.8649L24.3199 19.9549L22.6699 20.3549L2.66992 25.1949L22.6699 15.1949L30.51 13.2949Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M58.3403 57.7749V64.4349L52.1504 60.8649L58.3403 57.7749Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M90.71 26.085V89.965L70.71 99.965V36.085L72.15 35.365L77.5299 32.675L90.71 26.085Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M68.1697 34.615L57.6097 28.525L34.2097 15.015L31.0297 13.175L30.5098 12.875V19.795L47.5597 43.755L50.5098 47.905V47.925L52.1498 50.215V53.765L58.3397 57.335V64.435L52.1498 60.865V67.955L58.3397 71.525V78.625L52.1498 75.055V89.255L70.7097 99.965V36.085L68.1697 34.615ZM58.3397 50.235L52.5597 46.905L52.1498 46.665V39.565L58.3397 43.145V50.235Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M58.3403 43.1449V43.575L52.1504 46.6649V39.5649L58.3403 43.1449Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M90.7097 26.085L77.5297 32.675L72.1498 35.365L70.7097 36.085L68.1697 34.615L57.6097 28.525L34.2097 15.015L31.0297 13.175L30.5098 12.875L50.5098 2.875L90.7097 26.085Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M50.5104 47.905V47.925L45.9703 50.195L38.1404 39.255L24.3203 19.955L30.5104 16.865V19.795L47.5603 43.755L50.5104 47.905Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M52.1498 60.8651V67.955L58.3397 71.5251V71.9651L52.1498 75.0551V82.595L45.9697 85.685V50.1951L50.5098 47.925H50.5198L52.1498 50.2151V53.765L58.3397 57.3351V57.7751L52.1498 60.8651Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M30.5096 55.465V63.4349L18.1396 69.6149V48.3149L30.5096 55.465Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M58.3403 43.575V50.2349L52.5603 46.9049L52.1504 46.6649L58.3403 43.575Z" stroke="#0B0B0F" strokeLinejoin="round" /><path d="M58.3403 71.9651V78.6251L52.1504 75.0551L58.3403 71.9651Z" stroke="#0B0B0F" strokeLinejoin="round" /></svg>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#39D4DF" >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link  href="/projects" onClick={() => setMenuOpen(false)}>
              <svg className="icon hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="64" height="64" fill="none">
                <path d="M10 30 L50 10 L90 30 L90 70 L50 90 L10 70 Z" fill="#39D4DF" stroke="#0B0B0F" strokeWidth="4" />
                <path d="M50 10 L50 50 L90 70" stroke="#0B0B0F" strokeWidth="4" />
                <path d="M50 50 L10 70" stroke="#0B0B0F" strokeWidth="4" />
                <path d="M30 40 L50 30 L70 40 L70 60 L50 70 L30 60 Z" stroke="#0B0B0F" strokeWidth="2" fill="none" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <svg className="icon hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100" fill="none">
                <rect x="10" y="30" width="80" height="40" rx="6" fill="#39D4DF" stroke="#0B0B0F" strokeWidth="4" />
                <path d="M10 30 L50 60 L90 30" fill="none" stroke="#0B0B0F" strokeWidth="4" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;