import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import kycBackground from '../assets/herobg3.jpg'; 
import logoImage from '../assets/image1.png'; 


const NAVY = '#222222';
const GOLD = '#DEC05F'; 
const kycSteps = ["Personal Information", "Address", "Documents"];

const KycAddress = () => {
  const [formData, setFormData] = useState({});

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Step 2 Data:", formData);
    // window.location.href = '/kyc/documents'; // Example navigation
  };

  const getStepStatus = (index) => {
    const stepIndex = index + 1;
    const isCurrent = stepIndex === 2;
    const isCompleted = stepIndex < 2; 
    return { stepIndex, isCurrent, isCompleted };
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/*  NARROW RIGHT BACKGROUND IMAGE (1/6 width) */}
      <div 
        className="hidden lg:block absolute inset-y-0 right-0 w-[16.6666%] bg-cover bg-center"
        style={{ backgroundImage: `url(${kycBackground})` }}
      />
      
      {/*  MAIN CONTENT AREA */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full lg:w-[83.3333%] min-h-screen bg-white shadow-2xl relative z-10 p-8 md:p-12"
      >
        
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10">
          <img src={logoImage} alt="GlobalChain Logo" className="w-50 h-50 top-0 left-0  mx-2 absolute mt-[-45px]" />
        </div>

        {/* KYC Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* LEFT CONTENT AREA: Title, Description, Stepper */}
          <div className="md:col-span-5 lg:col-span-5 pt-12">
            
            <h1 className={`text-4xl font-extrabold text-[${NAVY}] mb-4`}>
                Verify Your Identity (KYC)
            </h1>
            <p className="text-gray-600 font-light mb-10 max-w-sm">
                "This is a mandatory step to comply with global financial regulations and ensure security of your assets, we must verify your identity before you can invest. It takes less than 2 minutes."
            </p>

            {/* Stepper Navigation */}
            <div className="space-y-0 relative">
              {kycSteps.map((step, index) => {
                const { stepIndex, isCurrent, isCompleted } = getStepStatus(index);
                
                return (
                  <div key={index} className="flex flex-col items-start relative">
                    
                    {index < kycSteps.length - 1 && (
                        <div className="absolute left-4 top-8 h-8 w-0.5 bg-gray-300"></div>
                    )}

                    <div className="flex items-center space-x-3 z-10 mb-2">
                      <div 
                        className={`
                          h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0
                          ${isCompleted 
                              ? `bg-[${GOLD}] text-white` 
                              : isCurrent 
                                  ? `bg-[${NAVY}] text-white shadow-md`
                                  : `bg-gray-200 text-gray-500`
                          }
                          transition duration-300
                        `}
                      >
                        {isCompleted ? <Check className="h-4 w-4" /> : stepIndex}
                      </div>
                      
                      <p className={`text-base font-semibold ${isCurrent ? `text-[${NAVY}]` : 'text-gray-500'}`}>
                        {step}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* RIGHT CARD AREA: Step 2 Form */}
          <div className="md:col-span-7 lg:col-span-7 pt-12">
            <div className={`bg-offwhite p-6 md:p-10 rounded-xl shadow-xl border-t-4 border-[${GOLD}]`}>
                <h3 className={`text-xl font-bold text-center mb-6 text-[${NAVY}]`}>2. Legal Address</h3>
                
                <form onSubmit={handleNext} className="space-y-4">
                    <label htmlFor="" className='text-gray-700 font-bold '>Country of Residence</label>
                    <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 outline-none focus:ring-[#DEC05F] transition">
                        <option value="nigeria">Nigeria</option>
                        <option value="morocco">Morocco</option>
                        <option value="shina">China</option>
                        <option value="algeria">Algeria</option>
                        <option value="india">India</option>
                        
                    </select>
                    <label htmlFor="" className='text-gray-700 font-bold '>Street Address</label>
                     <input type="text" placeholder="street address" required className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-[#DEC05F] transition" />
                    <label htmlFor="" className='text-gray-700 font-bold '>City</label>
                     <input type="text" placeholder="Abuja" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 outline-none focus:ring-[#DEC05F] transition" />
                    <label htmlFor="" className='text-gray-700 font-bold '>Postal Code</label>
                     <input type="text" placeholder="postal code" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 outline-none focus:ring-[#DEC05F] transition" />

                    <motion.a href='/kycdocuments' whileHover={{ scale: 1.02 }} type="submit" className={`w-full bg-[${NAVY}] text-white font-bold py-3 rounded-lg mt-4 flex items-center justify-center space-x-2`}>
                        <span>Next</span> <ArrowRight className="h-5 w-5" />
                    </motion.a>
                </form>
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default KycAddress;