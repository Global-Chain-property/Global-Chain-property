// src/components/Header.js
import React, { useState } from 'react';
import { Link, Menu, X } from 'lucide-react'; 
import logoImage from '../assets/image1.png';

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '#how-it-works' }, // Added IDs for scrolling
    { name: 'Properties', href: '#properties' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Sign Up', href: '/signup' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">


        <div className="p-4">
          <img src={logoImage} alt="" className='w-50 h-50 top-0 absolute left-0 mt-[-70px]' />
        </div>

        {/* 2. Desktop Navigation (Hidden on Mobile, shown on Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-[#DEC05F] font-medium transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 3. Actions & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          
          {/* Join waitlist Button */}
          <div className="header-actions hidden sm:block"> {/* Hide button on extra small screens if needed */}
            <a
              href="/waitlist"
              className="
                bg-[#DEC05F] text-white font-semibold 
                py-2.5 px-6 rounded-full
                shadow-lg shadow-[#DEC05F]/30 
                transition duration-300 ease-in-out 
                hover:bg-opacity-90 hover:scale-102 hover:shadow-xl
                md:py-2 px-4 text-sm 
              "
            >
              Join Waitlist
            </a>
          </div>
          
          {/* Mobile Menu Icon (Visible only on Mobile/Tablet) */}
          <button 
            className="md:hidden text-[#222222] hover:text-[#DEC05F] transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {/* Show X icon when menu is open, otherwise show Menu icon */}
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* 4. Mobile Menu Section (Conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-6 border-t border-gray-100 animate-fade-in-down">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg text-[#222222] hover:text-[#DEC05F] font-medium py-2 border-b border-gray-100 last:border-b-0"
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {link.name}
              </a>
            ))}
            
            <a
              href='/waitlist'
              className="
                mt-4 w-full bg-[#DEC05F] text-white text-center font-semibold 
                py-2.5 rounded-full
                shadow-md shadow-[#DEC05F]/30 
                transition duration-300 hover:scale-102
              "
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;