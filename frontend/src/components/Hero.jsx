import React from 'react';
import backgroundImage from '../assets/herobg1.jpg'; 

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};
const Hero = ({ }) => {
  return (

    <section className="relative w-full h-screen flex items-center justify-center pt-20"> 
      
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Modern luxury homes" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#222222]/40 backdrop-blur-[3px]"></div>
      </div>

      {/* Content Container (z-10 ensures it's above the background) */}
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-0">

        <h1 
          className="
            text-6xl md:text-7xl font-extrabold text-[#F5F5DC]
            mb-4 space-x-4
            animate-fade-in-up duration-700 delay-200 
          "
          style={{ animationDelay: '400ms' }} // Custom animation delay for stagger
        >
          Property Ownership for Everyone
        </h1>

        {/* Subheading with Animation */}
        <p 
          className="
            text-xl md:text-2xl text-[#F5F5DC] font-light 
            mb-10 max-w-3xl mx-auto
            animate-fade-in-up duration-700 delay-500
          "
          style={{ animationDelay: '500ms' }} // Staggered delay
        >
          Buy entire homes or just shares — start with any budget.
        </p>

         <p 
          className="
            text-xl md:text-2xl text-[#F5F5DC] font-bold 
            mb-6 max-w-3xl mx-auto
            animate-fade-in-up duration-700 delay-500
          "
          style={{ animationDelay: '500ms' }} // Staggered delay
        >
          Get early access by joining our waitlist today!
        </p>

        {/* Action Buttons Container with Animation */}
        <div 
          className="
            flex justify-center space-x-4 
            animate-fade-in-up duration-700 delay-800
          "
          style={{ animationDelay: '800ms' }} // Staggered delay for buttons
        >
          {/* Primary Button: Browse Properties */}
          {/* <button  onClick={() => scrollToSection('properties')}
            className="
              bg-[#DEC05F] text-white font-semibold 
              py-2 px-4 rounded-lg text-lg 
              shadow-xl shadow-[#DEC05F]/60 
              transition duration-300 ease-in-out hover:scale-105
              md:py-1 px-2 rounded-full text-sm md:text-base
            "
          >
            Join Waitlist
          </button> */}

          <a
            className="
              bg-[#DEC05F] text-white font-semibold text-center
              py-2 px-4 rounded-lg text-lg 
              shadow-xl shadow-[#DEC05F]/60 
              transition duration-300 ease-in-out hover:scale-105
              md:py-2 px-4 rounded-full text-sm md:text-base
            "
          >
            Join Waitlist
          </a>

          {/* Secondary Button: Learn How It Works (Transparent/Ghost style) */}
          <button onClick={() => scrollToSection('how-it-works')}
            className="
              bg-transparent border-2 border-white text-white font-semibold 
              py-2 px-4 rounded-lg text-lg 
              transition duration-300 ease-in-out hover:bg-white/10 hover:border-[#DEC05F]
              md:py-2 px-4 rounded-full text-sm md:text-base
            "
          >
            How It Works
          </button>
        </div>
      </div>


    </section>
  );
};

export default Hero;