<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;

class Car extends Model
{
    /** @use HasFactory<\Database\Factories\CarFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'registration_number',
        'is_registered'
    ];

    protected $casts = [
        'is_registered' => 'boolean',
    ];

    /**
     * Get parts for the car.
     */
    public function parts(): HasMany
    {
        return $this->hasMany(Part::class);
    }

    protected static function booted(): void
    {
        static::updating(function (self $car) {
            // Reset registration_number if is_registered became false
            if ($car->isDirty('is_registered') && !$car->is_registered) {
                $car->registration_number = null;
            }
        });
    }

    /**
     * Scope a query to filter cars by name, registration number and registration status.
     */
    #[Scope]
    protected function filter(Builder $query): void
    {
        $name = request('name');
        $registrationNumber = request('registration_number');
        $isRegistered = request('is_registered');

        if ($name) {
            $query->where('name', 'like', "%{$name}%");
        }

        if ($registrationNumber) {
            $query->where('registration_number', 'like', "%{$registrationNumber}%");
        }

        if (!is_null($isRegistered)) {
            $query->where('is_registered', filter_var($isRegistered, FILTER_VALIDATE_BOOLEAN));
        }
    }
}
