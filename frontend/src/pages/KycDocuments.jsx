import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Check } from 'lucide-react'; 
import kycBackground from '../assets/herobg3.jpg';
import logoImage from '../assets/image1.png'; 


const NAVY = '#222222';
const GOLD = '#DEC05F'; 
const kycSteps = ["Personal Information", "Address", "Documents"];
const documentTypes = ["Passport", "Driver's License", "National ID"];

const KycDocuments = () => {
  const [file, setFile] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !isConfirmed) {
      alert("Please upload a document and confirm the information.");
      return;
    }
    alert("Documents Submitted for Verification!");
    // window.location.href = '/2fa-setup'; // Example navigation to next step (2FA)
  };


  const fileInputRef = useRef(null); // <-- Define the ref

    // Function to trigger the click on the hidden input
  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };


  const getStepStatus = (index) => {
    const stepIndex = index + 1;
    const isCurrent = stepIndex === 3;
    const isCompleted = stepIndex < 3; 
    return { stepIndex, isCurrent, isCompleted };
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/*  NARROW RIGHT BACKGROUND IMAGE (1/6 width) */}
      <div 
        className="hidden lg:block absolute inset-y-0 right-0 w-[16.6666%] bg-cover bg-center"
        style={{ backgroundImage: `url(${kycBackground})` }}
      />
      
      {/* MAINCONTENT AREA  */}
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
                "This is a mandatory step to comply with global financial regulations and ensure security of your assets, we must verify our identity before you can invest. It takes less than 2 minutes."
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
          
          {/* RIGHT CARD AREA */}
          <div className="md:col-span-7 lg:col-span-7 pt-12">
            <div className={`bg-offwhite p-6 md:p-10 rounded-xl shadow-xl border-t-4 border-[${GOLD}]`}>
                <h3 className={`text-xl font-bold text-center mb-6 text-[${NAVY}]`}>3. Document Upload</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <select required className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-[#DEC05F] transition">
                        <option value="">Document Type</option>
                        {documentTypes.map(doc => <option key={doc} value={doc}>{doc}</option>)}
                    </select>
                    
                    {/* Drag & Drop Area */}
                    <div className="border-2 border-dashed border-[#DEC05F] p-8 rounded-lg text-center cursor-pointer  hover:scale-103 transition duration-300" onClick={triggerFileSelect} >
                        <Upload className={`h-8 w-8 mx-auto text-gray-500 mb-2`} />
                        <p className="text-sm text-gray-500">Drag & Drop your file here, or <span className={`text-[${GOLD}] font-semibold`}>browse</span></p>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="hidden" ref={fileInputRef} />
                        {file && <p className="text-sm text-green-600 mt-2">File selected: {file.name}</p>}
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="flex items-center pt-4">
                        <input 
                            type="checkbox" 
                            checked={isConfirmed}
                            onChange={(e) => setIsConfirmed(e.target.checked)}
                            className={`h-4 w-4 text-[${GOLD}] border-gray-300 rounded focus:ring-[${GOLD}]`}
                        />
                        <label className="ml-2 text-sm text-gray-700">
                            I confirm I am over 18 and all information provided is true.
                        </label>
                    </div>

                    <motion.button whileHover={{ scale: 1.02 }} type="submit" disabled={!isConfirmed || !file} className={`w-full bg-[${GOLD}] text-white font-bold py-3 rounded-lg mt-4 disabled:bg-gray-400`}>
                        Submit for Verification
                    </motion.button>
                </form>
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default KycDocuments;