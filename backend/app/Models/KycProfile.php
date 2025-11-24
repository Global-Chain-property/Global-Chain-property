<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KycProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'date_of_birth',
        'bvn',
        'bvn_verified',
        'country_of_residence',
        'street_address',
        'city',
        'postal_code',
        'document_type',
        'document_path',
    ];

    protected $casts = [
        'bvn_verified' => 'boolean',
        'date_of_birth' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}