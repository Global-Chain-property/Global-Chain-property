import React, { useState } from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react';

const Demo = () => {
  // State for the two main inputs
  const [propertyValue, setPropertyValue] = useState(200000); 
  const [investmentAmount, setInvestmentAmount] = useState(5000); 

  // Static/Calculated values
  const estimatedAnnualYield = 6; // Example 6% annual return
  
  // Calculations
  const ownershipPercentage = ((investmentAmount / propertyValue) * 100).toFixed(2); // e.g., 2.5% 
  const annualRentalIncome = (investmentAmount * (estimatedAnnualYield / 100)).toFixed(0);
  const monthlyRentalIncome = (annualRentalIncome / 12).toFixed(0); 

  // Helper for adding/subtracting from investment amount
  const handleInvestmentChange = (delta) => {
    setInvestmentAmount(prev => Math.max(100, prev + delta)); // Minimum investment of $100
  };

  return (
    <section className="py-20 md:py-32 bg-[#F5F5DC]/40">
      <div className="container mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex justify-center mb-4">
          <div className="h-1 w-60 mt-[-20px] bg-[#DEC05F] rounded-full animate-fade-in-up duration-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#222222] mb-4">
          See How Easy It Is
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Use our simple calculator to see your potential returns in real time.
        </p>

        {/* Demo Card: Central Interactive Element */}
        <div 
          className="max-w-4xl mx-auto p-8 lg:p-12 bg-[#F5F5DC] rounded-xl shadow-2xl 
          border-t-4 border-[#DEC05F] transition duration-500 animate-fade-in-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* LEFT SIDE: Inputs */}
            <div>
              <h3 className="text-3xl font-bold text-[#222222] mb-6">Your Investment Simulation</h3>
              
              {/* Property Value Display (Static for this demo) */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Choose a property value:
                </label>
                <p className="text-3xl font-extrabold text-[#222222]">
                  ${propertyValue.toLocaleString()} 
                </p>
                <span className="text-sm text-gray-500">(Fixed for this demonstration)</span>
              </div>

              {/* Investment Selector (Interactive) */}
              <div className="mb-10">
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Select your investment:
                </label>
                <div className="flex items-center space-x-4">
                  
                  {/* Minus Button */}
                  <button 
                    onClick={() => handleInvestmentChange(-1000)}
                    disabled={investmentAmount <= 1000}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 disabled:opacity-50"
                  >
                    <MinusCircle className="h-6 w-6 text-[#222222]" />
                  </button>
                  
                  {/* Amount Display */}
                  <p className="text-4xl font-extrabold text-[#DEC05F] w-32 text-center transition duration-300">
                    ${investmentAmount.toLocaleString()}
                  </p>
                  
                  {/* Plus Button */}
                  <button 
                    onClick={() => handleInvestmentChange(1000)}
                    className="p-3 rounded-full bg-[#DEC05F]/20 hover:bg-[#DEC05F]/40 transition duration-300"
                  >
                    <PlusCircle className="h-6 w-6 text-[#DEC05F]" />
                  </button>
                </div>
              </div>
              
              {/* Simulate Button (CTA) */}
              <button 
                className="
                  w-full bg-[#DEC05F] text-white font-semibold 
                  py-3 rounded-lg text-lg 
                  shadow-lg shadow-[#DEC05F]/30 
                  transition duration-300 ease-in-out hover:scale-[1.01] hover:bg-opacity-90
                "
              >
                Simulate Investment
              </button>
            </div>
            
            {/* RIGHT SIDE: Results  */}
            <div className="bg-white p-8 rounded-lg shadow-inner flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#222222] mb-6 border-b pb-3">Your Estimated Results</h3>
              
              {/* Ownership Percentage */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <p className="text-lg text-gray-600">Your Ownership:</p>
                <p className="text-3xl font-extrabold text-[#222222] transition-all duration-500">
                  {ownershipPercentage}%
                </p>
              </div>

              {/* Monthly Income */}
              <div className="flex justify-between items-center py-3">
                <p className="text-lg text-gray-600">Monthly Rental Income (Approx.):</p>
                <p className="text-3xl font-extrabold text-[#DEC05F] transition-all duration-500">
                  ${monthlyRentalIncome.toLocaleString()}
                </p>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                *Based on an estimated {estimatedAnnualYield}% annual rental yield. Returns are not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;