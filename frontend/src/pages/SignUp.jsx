
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const API_BASE_URL = 'http://127.0.0.1:8000/api';
const GOLD = '#DEC05F';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    
    // Client-side password match check
    if (password !== passwordConfirmation) {
        setError('Passwords do not match.');
        setLoading(false);
        return;
    }

    try {
        await getCsrfToken(); // 1. Get the CSRF cookie first

        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            credentials: 'include', // 2. Send the cookie with the request
            body: JSON.stringify({ 
                name, 
                email, 
                password,
                password_confirmation: passwordConfirmation, // 3. The name Laravel expects
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Registration successful! Please proceed to KYC.');
            navigate('/kycpersonal'); // Redirect to the first KYC step
        } else {
            // Handle validation errors (422) or other server errors
            const errorMsg = data.errors ? Object.values(data.errors).flat().join(' | ') : data.message || 'Registration failed.';
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
    <AuthLayout title="Create Your GlobalChain Account">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {error && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

        {/* INPUT: Full Name */}
        <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" 
        />
        {/* INPUT: Email */}
        <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" 
        />
        {/* INPUT: Password */}
        <input 
            type="password" 
            placeholder="Password (Min 8 chars)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" 
        />
        {/* INPUT: Confirm Password */}
        <input 
            type="password" 
            placeholder="Confirm Password" 
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" 
        />
        
        <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[${GOLD}] shadow-[${GOLD}]/60 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 hover:scale-103 hover:bg-opacity-90 disabled:bg-gray-400`}
            >
              {loading ? 'Registering...' : 'Sign Up'}
            </button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-gray-500">
        Already have an account? <b><a href="/login" className={`text-[${GOLD}] hover:underline`}>Log In</a></b>
      </p>
    </AuthLayout>
  );
};

export default SignUp;