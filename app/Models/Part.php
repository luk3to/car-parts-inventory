<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Part extends Model
{
    /** @use HasFactory<\Database\Factories\PartFactory> */
    use HasFactory;

    protected $fillable = [
        'car_id',
        'serial_number',
        'name'
    ];

    /**
     * Get the car that owns the part.
     */
    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }
}
