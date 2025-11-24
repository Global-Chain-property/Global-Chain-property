import React, { useState } from 'react';
import { motion } from 'framer-motion';
import waitlistBackground from '../assets/waitlist1.svg'; 
import logoImage from '../assets/image1.png';

const Waitlist = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const GOLD = '#DEC05F'; 
  const NAVY = '#222222'; 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ 
          first_name: firstName, 
          last_name: lastName, 
          email: email 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Successfully joined the waitlist!');
        setFirstName('');
        setLastName('');
        setEmail('');
      } else if (response.status === 422) {
        const errorMsg = data.errors ? Object.values(data.errors).flat().join(' | ') : data.message || 'Validation failed.';
        setMessage(`Error: ${errorMsg}`);
      } else {
        setMessage(`Error: ${data.message || 'Server error occurred.'}`);
      }
    } catch (error) {
      console.error('Network or Fetch Error:', error);
      setMessage('A network error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      <div className="flex items-center justify-center p-8 md:p-12 bg-offwhite order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-md"
        >
          
          <div className="text-center mb-6">
             <img src={logoImage} alt="GlobalChain Logo" className="w-50 h-50 top-0 left-0  mx-2 absolute mt-[-42px] " /> 
          </div>

          <div className="bg-white rounded-xl shadow-2xl border-t-4 border-[#DEC05F] p-8">
            <h2 className={`text-3xl font-bold text-center text-[${NAVY}] mb-8`}>
              Join Our Exclusive Waitlist
            </h2>
            
            <p className="text-center text-gray-600 mb-6">
              Be the first to access tokenized real estate opportunities.
            </p>
            {message && (
                <div className={`p-3 mb-4 rounded-lg text-sm ${message.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition`}
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition`}
                  required
                />
              </div>
            </div>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[${GOLD}] shadow-[${GOLD}]/60 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 hover:scale-103 hover:bg-opacity-90 disabled:bg-gray-400`}
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </div>
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block relative order-1 lg:order-2"
      >
        <img 
          src={waitlistBackground} 
          alt="Waitlist background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-[${NAVY}]/50 flex items-center justify-center`}>
        </div>
      </motion.div>
    </div>
  );
};

export default Waitlist;