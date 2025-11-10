// src/components/Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'How It Works', href: '#how-it-works' }, // Added IDs for scrolling
    { name: 'Properties', href: '#properties' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Login', href: '#login' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Fixed, slightly elevated header with white background
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">

        {/* 1. Logo: GlobalChain Property (using custom colors) */}
        <div className="text-2xl font-bold text-[#222222] tracking-tight">
          GlobalChain <span className="text-[#DEC05F]">Property</span>
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
          
          {/* Connect Wallet Button */}
          <div className="header-actions hidden sm:block"> {/* Hide button on extra small screens if needed */}
            <button 
              className="
                bg-[#DEC05F] text-white font-semibold 
                py-2.5 px-6 rounded-full
                shadow-lg shadow-[#DEC05F]/30 
                transition duration-300 ease-in-out 
                hover:bg-opacity-90 hover:scale-[1.02] hover:shadow-xl
                md:py-2 px-4 text-sm 
              "
            >
              Connect Wallet
            </button>
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
            {/* Wallet button placed at the bottom of the mobile menu for prominence */}
            <button 
              className="
                mt-4 w-full bg-[#DEC05F] text-white font-semibold 
                py-2.5 rounded-full
                shadow-md shadow-[#DEC05F]/30 
                transition duration-300 hover:scale-[0.99]
              "
            >
              Connect Wallet
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;