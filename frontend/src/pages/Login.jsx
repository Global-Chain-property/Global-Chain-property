// --- START OF FILE Login.jsx ---

// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const API_BASE_URL = 'http://127.0.0.1:8000/api';
const GOLD = '#DEC05F';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 1. Function to get the CSRF Token (CRUCIAL for Sanctum)
  const getCsrfToken = async () => {
    await fetch(`${API_BASE_URL}/sanctum/csrf-cookie`, { 
      method: 'GET',
      credentials: 'include' 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        await getCsrfToken(); // 1. Get the CSRF cookie first

        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            credentials: 'include', // 2. Send the cookie with the request
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            
            // Check the KYC status returned from the backend
            if (data.user && data.user.kyc_status === 'verified') {
                navigate('/dashboard'); // Go to dashboard if KYC is verified
            } else {
                navigate('/kycpersonal'); // Go to KYC to start/continue verification
            }
        } else {
            // Handle validation errors (422) or authentication failure (401/403/422)
            const errorMsg = data.errors ? Object.values(data.errors).flat().join(' | ') : data.message || 'Login failed. Check your credentials.';
            setError(errorMsg);
        }

    } catch (err) {
        console.error('Network Error:', err);
        setError('A network error occurred. Please check your server connection.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <AuthLayout title="Log In to Your Account">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {error && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

        <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" 
        />
        <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" 
        />
        
        <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[${GOLD}] shadow-[${GOLD}]/60 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 hover:scale-103 hover:bg-opacity-90 disabled:bg-gray-400`}
            >
              {loading ? 'Logging In...' : 'Log In'}
            </button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-gray-500">
        New investor? <b><a href="/signup" className={`text-[${GOLD}] hover:underline`}>Sign Up</a></b>
      </p>
    </AuthLayout>
  );
};

export default Login;
// --- END OF FILE Login.jsx ---