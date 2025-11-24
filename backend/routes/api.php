<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WaitlistController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\KycController; 

// --- 1. PUBLIC ROUTES (No Login Required) ---
Route::group([], function () {
    
    // Sanctum CSRF Cookie Route (Frontend must hit this first)
    Route::get('/sanctum/csrf-cookie', function () {
        return response()->json(['message' => 'CSRF cookie set']);
    });
    
    // Authentication
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    // Waitlist Submission
    Route::post('/waitlist', [WaitlistController::class, 'join']);
    
});


// --- 2. PROTECTED ROUTES (Requires 'auth:sanctum' Middleware) ---
Route::middleware('auth:sanctum')->group(function () {
    
    // Current User Info & Logout
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // KYC Routes (Multi-Step Process)
    Route::prefix('kyc')->group(function () {
        Route::post('/personal', [KycController::class, 'personal']); 
        Route::post('/address', [KycController::class, 'address']);
        Route::post('/documents', [KycController::class, 'documents']); 
    });
});