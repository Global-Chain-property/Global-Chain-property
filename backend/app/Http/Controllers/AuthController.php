<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    // Handles user registration
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255', 
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user); 

        return response()->json([
            'message' => 'Registration successful.',
            'user' => $user->only('id', 'name', 'email', 'kyc_status')
        ], 201);
    }

    // Handles user login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials do not match our records.'],
            ]);
        }

        return response()->json([
            'message' => 'Login successful.',
            'user' => Auth::user()->only('id', 'name', 'email', 'kyc_status')
        ]);
    }

    // Handles user logout
    public function logout(Request $request)
    {
        Auth::guard('web')->logout(); 
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully']);
    }

    // Retrieves the currently authenticated user
    public function user(Request $request)
    {
        return response()->json($request->user()->only('id', 'name', 'email', 'kyc_status'));
    }
}