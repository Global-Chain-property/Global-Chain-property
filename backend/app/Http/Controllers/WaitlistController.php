<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Waitlist;
use Illuminate\Support\Facades\Validator;

class WaitlistController extends Controller
{
    /**
     * Handles the Waitlist submission.
     */
    public function join(Request $request)
    {
        // 1. Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:waitlists', // Check for existing email
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // 2. Create the new waitlist entry
        $waitlist = Waitlist::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
        ]);

        // 3. Respond to the client
        return response()->json([
            'message' => 'Successfully joined the waitlist!',
            'data' => $waitlist->only('id', 'email') // Return minimal data
        ], 201);
    }
}