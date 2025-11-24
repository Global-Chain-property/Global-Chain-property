import React from 'react';
import { SearchCheckIcon, Scale, Smartphone} from 'lucide-react';

const steps = [
  {
    icon: <SearchCheckIcon/>,
    title: 'Browse & Choose',
    points: [
      'Find properties worldwide',
      'Filter by location, price, type',
      'View high-quality photos and details',
    ],
  },
  {
    icon: <Scale/>,
    title: 'Choose Ownership Type',
    points: [
      'Buy the entire property',
      'OR buy shares starting from $100',
      'Your choice, your budget',
    ],
  },
  {
    icon: <Smartphone/>,
    title: 'Own & Manage',
    points: [
      'Get your digital ownership certificate',
      'Earn rental income automatically',
      'Sell anytime, from anywhere',
    ],
  },
];


const HowItWorks = () => {
  return (
  
    <section id='how-it-works' className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-10">

        <div className="flex justify-center mb-4">
          <div className="h-1 w-60 mt-[-20px] bg-[#DEC05F] rounded-full animate-fade-in-up duration-500" />
        </div>
              
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#222222] mb-6">
          Own Property the <span className="text-[#DEC05F]">Modern Way</span>
        </h2>
        

        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Simplified investment. Secure records. Global access.
        </p>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            
            // Step Card with Staggered Animation
            <div 
              key={index} 
              className={`
                bg-[#F5F5DC] p-8 rounded-xl shadow-xl shadow-[#DEC05F]/40  hover:shadow-2xl transition duration-500
                transform hover:-translate-y-1 
                animate-fade-in-up 
              `}
              // Apply staggered delay for a smooth, interactive entrance
              style={{ animationDelay: `${300 * (index + 1)}ms` }} 
            >
              
              {/* Icon Container (Large, [#DEC05F] Accent) */}
              <div className="text-8xl text-[#DEC05F] mb-6 flex justify-center items-center h-16 w-16 rounded-full bg-[#DEC05F]/10">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#222222] mb-4">
                {step.title}
              </h3>
              
              {/* Description/Points */}
              <ul className="space-y-3 text-gray-800">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    {/* Checkmark style for clean look */}
                    <span className="text-[#DEC05F] mr-3 mt-1 text-lg">✓</span>
                    <span className='font-light'>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;