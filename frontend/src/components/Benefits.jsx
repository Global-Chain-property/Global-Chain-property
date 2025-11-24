import React from 'react';
import { Globe, DollarSign, Lock, TrendingUp, RefreshCw, Users } from 'lucide-react';

const benefitsData = [
  {
    icon: Globe,       
    title: 'Global Access',
    description: 'Invest in properties worldwide from your phone',
  },
  {
    icon: DollarSign,   
    title: 'Low Barrier',
    description: 'Start with small amounts - no need to be rich',
  },
  {
    icon: Lock,         
    title: 'Secure Ownership',
    description: 'Your ownership is recorded and protected',
  },
  {
    icon: TrendingUp,   
    title: 'Earn Income',
    description: 'Get your share of rental profits automatically',
  },
  {
    icon: RefreshCw,    
    title: 'Easy Selling',
    description: 'Sell your property or shares in minutes, not months',
  },
  {
    icon: Users,      
    title: 'Community',
    description: 'Co-own with trusted investors worldwide',
  }
];



const Benefits = () => {
  return (
    <section id='benefits' className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex justify-center mb-4">
          <div className="h-1 w-60 bg-[#DEC05F] rounded-full mb-4 animate-fade-in-up duration-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#222222] mb-4">
          Why Choose <span className="text-[#DEC05F]">GlobalChain?</span>
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We combine the accessibility of tokenization with bank-level security.
        </p>

        {/* Benefits Grid (3 columns on medium/large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => {
            const BenefitIcon = benefit.icon; 
            
            return (
              
              <div 
                key={benefit.title}
                className={`
                  p-6 bg-white rounded-xl border border-gray-100 
                  transition duration-500 ease-in-out
                  shadow-xl shadow-[#DEC05F]/30 hover:shadow-2xl hover:border-[#DEC05F] 
                  transform hover:-translate-y-1 
                  animate-fade-in-up
                `}
                // Staggered delay for each card
                style={{ animationDelay: `${100 * (index + 1)}ms` }} 
              >
                
                {/* Icon Container ([#DEC05F] Highlight) */}
                <div className="mb-4 flex items-center h-12 w-12 rounded-full bg-[#DEC05F]/20">
                  <BenefitIcon className="h-6 w-6 text-[#DEC05F] mx-auto" strokeWidth={2.5} />
                </div>

                
                <h3 className="text-xl font-bold text-[#222222] mb-2">
                  {benefit.title}
                </h3>
                
                
                <p className="text-gray-900 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;