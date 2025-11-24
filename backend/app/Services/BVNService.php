<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;

class BVNService
{
    /**
     * Simulates external BVN validation.
     * Use MOCK_BVN = '11223344550', First: 'TEST', Last: 'USER', DOB: '1995-10-25' for success
     */
    public function verifyBvn(string $bvn, string $dob_string, string $first_name, string $last_name): array
    {
        // MOCK DATA for a successful BVN check
        $MOCK_BVN = '11223344550';
        $MOCK_FIRST = 'TEST';
        $MOCK_LAST = 'USER';
        $MOCK_DOB = '1995-10-25'; // YYYY-MM-DD

        // Basic BVN format check
        if (strlen($bvn) !== 11 || !is_numeric($bvn)) {
            return ['success' => false, 'message' => 'Invalid BVN format. BVN must be 11 digits.', 'data' => []];
        }

        $inputFirst = strtoupper($first_name);
        $inputLast = strtoupper($last_name);

        // Check if input matches mock data
        if ($bvn === $MOCK_BVN && $inputFirst === $MOCK_FIRST && $inputLast === $MOCK_LAST && $dob_string === $MOCK_DOB) {
            return [
                'success' => true, 
                'message' => 'BVN successfully verified and matched.', 
                'data' => [
                    'first_name' => $MOCK_FIRST,
                    'last_name' => $MOCK_LAST,
                    'date_of_birth' => $MOCK_DOB,
                ]
            ];
        }
        
        return ['success' => false, 'message' => 'BVN Verification failed. Data mismatch or BVN not found.', 'data' => []];
    }
}