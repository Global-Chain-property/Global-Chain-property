import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/image1.png'; 
import authBackground from '../assets/herobg4.jpg'; 


const AuthLayout = ({ title, children }) => {
  const GOLD = '#DEC05F'; 
  const NAVY = '#222222'; 
  
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      

      {/* left SIDE: Form Container */}
      <div className="flex items-center justify-center p-8 md:p-12 bg-offwhite">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-md"
        >
          
          {/* Logo and Brand Name */}
          <div className="text-start mb-6">
             <img src={logoImage} alt="GlobalChain Logo" className="w-50 h-50 absolute mx-2 mt-[-42px] top-0 left-0" />

          </div>

          <div className="bg-white rounded-xl shadow-2xl border-t-4 border-[#DEC05F] p-8">
            <h2 className={`text-3xl font-bold text-center text-[${NAVY}] mb-8`}>
              {title}
            </h2>
            {children}
          </div>
          
        </motion.div>
      </div>

            {/* right SIDE: Full-Height Image Background */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block relative"
      >
        <img 
          src={authBackground} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for a premium look and text legibility */}
        <div className="absolute inset-0 bg-[${NAVY}]/50 flex items-center justify-center">

        </div>
      </motion.div>

    </div>
  );
};

export default AuthLayout;