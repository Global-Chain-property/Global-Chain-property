import React from 'react';
import { Star } from 'lucide-react'; 
import herobg2 from '../assets/herobg2.jpg';
import herobg3 from '../assets/herobg3.jpg';
import herobg4 from '../assets/herobg4.jpg'

const featuredProperties = [
  {
    id: 1,
    image: herobg2, 
    title: 'Luxury Villa',
    location: 'Miami, Florida',
    value: 250000, 
    sharePrice: 250, 
    rating: 4.8, 
  },
  {
    id: 2,
    image: herobg3,
    title: 'Modern Apartment',
    location: 'Central London, UK',
    value: 1200000,
    sharePrice: 1000,
    rating: 4.9,
  },
  {
    id: 3,
    image: herobg4,
    title: 'Historic Townhouse',
    location: 'Paris, France',
    value: 5500000,
    sharePrice: 5000,
    rating: 4.7,
  },
];

// Helper function to format currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);
};




const PropertyShowcase = () => {
  return (

    <section id='properties' className="py-20 md:py-28 bg-[#F5F5DC]/40">
      <div className="container mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex justify-center mb-4">
          <div className="h-1 w-60 bg-[#DEC05F] mt-[-20px] rounded-full animate-fade-in-up duration-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#222222] mb-4">
          Featured <span className="text-[#DEC05F]">Properties</span>
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Exclusive tokenized opportunities in prime global real estate markets.
        </p>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProperties.map((property, index) => (
            
            // Property Card with Staggered Animation and Hover Effect
            <div 
              key={property.id} 
              className={`
                bg-white rounded-xl shadow-xl overflow-hidden 
                transition duration-400 ease-in-out
                hover:shadow-2xl hover:scale-[1.02]
                animate-fade-in-up 
              `}
              // Staggered delay for interactive entrance
              style={{ animationDelay: `${150 * (index + 1)}ms` }} 
            >
              {/* Image Container */}
              <div className="h-60 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                
                {/* Title and Rating */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#222222]">{property.title}</h3>
                  <div className="flex items-center text-sm text-[#DEC05F]">
                    <Star className="h-4 w-4 fill-[#DEC05F] mr-1" />
                    <span>{property.rating}</span> 
                  </div>
                </div>

                {/* Location */}
                <p className="text-gray-500 text-sm mb-4">📍 {property.location}</p>

                {/* Value & Shares */}
                <div className="space-y-2 text-sm mb-6">
                  <p className="flex justify-between font-medium">
                    <span className="text-gray-700">Total Value:</span>
                    <span className="text-[#222222] font-semibold">{formatCurrency(property.value)}</span> 
                  </p>
                  <p className="flex justify-between text-[#DEC05F]">
                    <span className="font-medium">Shares from:</span>
                    <span className="font-bold">{formatCurrency(property.sharePrice)}</span> 
                  </p>
                </div>

                {/* View Details Button (CTA) */}
                <button 
                  className="
                    w-full bg-[#222222] text-white font-semibold 
                    py-3 rounded-lg 
                    transition duration-300 ease-in-out 
                    hover:bg-[#DEC05F] hover:shadow-lg hover:shadow-[#DEC05F]/30
                  "
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* General CTA to browse all properties */}
        <div className="text-center mt-16">
          <button 
            className="
              text-lg border-2 border-[#222222] text-[#222222] font-semibold 
              py-3 px-8 rounded-lg 
              transition duration-300 ease-in-out hover:bg-[#222222] hover:text-white
            "
          >
            See All Investment Opportunities
          </button>
        </div>

      </div>
    </section>
  );
};

export default PropertyShowcase;