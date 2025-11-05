<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;

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

    /**
     * Scope a query to filter parts by name and serial number.
     */
    #[Scope]
    protected function filter(Builder $query): void
    {
        $name = request('name');
        $serialNumber = request('serial_number');

        if ($name) {
            $query->where('name', 'like', "%{$name}%");
        }

        if ($serialNumber) {
            $query->where('serial_number', 'like', "%{$serialNumber}%");
        }
    }
}
