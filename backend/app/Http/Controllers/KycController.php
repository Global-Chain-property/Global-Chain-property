<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\KycProfile;
use App\Services\BVNService; 

class KycController extends Controller
{
    protected $bvnService;

    public function __construct(BVNService $bvnService)
    {
        $this->bvnService = $bvnService;
    }

    // --- KYC STEP 1: Personal Information and BVN Verification ---
    public function personal(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date|before:today|date_format:Y-m-d',
            'bvn' => 'required|string|size:11|unique:kyc_profiles,bvn,' . $user->id . ',user_id', 
        ]);

        // 2. BVN Verification
        $bvn_result = $this->bvnService->verifyBvn(
            $validated['bvn'], 
            $validated['date_of_birth'], 
            $validated['first_name'], 
            $validated['last_name']
        );

        if (!$bvn_result['success']) {
            return response()->json([
                'message' => 'BVN Verification Failed.',
                'error' => $bvn_result['message']
            ], 422); 
        }

        // 3. Save Data
        $profile = $user->kycProfile()->updateOrCreate(
            ['user_id' => $user->id],
            array_merge($validated, ['bvn_verified' => true])
        );
        
        // 4. Update User KYC Status
        $user->update(['kyc_status' => 'pending']);


        return response()->json([
            'message' => 'Personal information & BVN successfully saved and verified.',
            'profile' => $profile
        ]);
    }
    
    // --- KYC STEP 2: Address Information ---
    public function address(Request $request)
    {
        $user = Auth::user();

        if (!$user->kycProfile || !$user->kycProfile->bvn_verified) {
             return response()->json(['message' => 'Please complete and verify Step 1 (Personal Info/BVN) first.'], 403);
        }

        $validated = $request->validate([
            'country_of_residence' => 'required|string|max:255',
            'street_address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'postal_code' => 'required|string|max:20',
        ]);

        $user->kycProfile->update($validated);

        return response()->json([
            'message' => 'Address information successfully saved.',
            'profile' => $user->kycProfile
        ]);
    }

    // --- KYC STEP 3: Documents Upload ---
    public function documents(Request $request)
    {
        $user = Auth::user();

        if (!$user->kycProfile || !$user->kycProfile->street_address) {
             return response()->json(['message' => 'Please complete Step 2 (Address) first.'], 403);
        }

        $validated = $request->validate([
            'document_type' => 'required|in:Passport,Driver\'s License,National ID',
            'document_file' => 'required|file|mimes:jpeg,png,pdf|max:5120', 
        ]);

        $path = null;
        if ($request->hasFile('document_file')) {
            $path = $request->file('document_file')->store('kyc_documents/' . $user->id, 'public'); 
        }

        $user->kycProfile->update([
            'document_type' => $validated['document_type'],
            'document_path' => $path,
        ]);

        $user->update(['kyc_status' => 'pending']); 

        return response()->json([
            'message' => 'Documents uploaded and KYC submitted for review!',
            'profile' => $user->kycProfile
        ]);
    }
}