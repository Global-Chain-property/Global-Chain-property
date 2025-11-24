// src/components/Footer.js
import React from 'react';
import { FacebookIcon, TwitterIcon, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Properties', href: '/properties' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const socialLinks = [
  { icon: FacebookIcon, href: '#facebook' },
  { icon: TwitterIcon, href: '#twitter' },
  { icon: Linkedin, href: '#linkedin' },
  { icon: Instagram, href: '#instagram' },
];



const Footer = () => {
  return (

    <footer className="bg-[#222222] text-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10 mb-10">
          
          {/* Column 1: Company Info & Social Media */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              GlobalChain <span className="text-[#DEC05F]">Property</span>
            </h3>
            <p className="text-gray-400 mb-6 font-light">
              Tokenizing the future of real estate investment globally.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={index} 
                    href={link.href} 
                    aria-label={link.icon.name}
                    className="text-gray-400 hover:text-[#DEC05F] transition duration-300"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 & 3: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-[#DEC05F]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-300 font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-[#DEC05F]">Legal</h4>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-300 font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Final CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm order-2 md:order-1 mt-6 md:mt-0">
            &copy; {new Date().getFullYear()} GlobalChain Property. All rights reserved.
          </p>

          {/* Ready to Start Investing CTA */}
          <div className="order-1 md:order-2">
            <a 
              href="/signup"
              className="
                flex items-center space-x-2 
                bg-[#DEC05F] text-white font-semibold 
                py-3 px-6 rounded-lg 
                shadow-lg shadow-[#DEC05F]/30 
                transition duration-300 ease-in-out hover:scale-[1.05]
                text-lg
              "
            >
              <span>Ready to start investing?</span>
              <ArrowRight className="h-5 w-5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;