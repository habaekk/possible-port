// Header.tsx
"use client";

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItemStyle = "cursor-pointer transition-colors duration-300 text-white md:text-lg text-base hover:text-yellow-400";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur ${
        isScrolled ? 'bg-customGreen py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="flex justify-center">
        <ul className="flex space-x-8">
          <li className={navItemStyle} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </li>
          <li className={navItemStyle} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Projects
          </li>
          <li className={navItemStyle} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About Me
          </li>
          <li className={navItemStyle} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
