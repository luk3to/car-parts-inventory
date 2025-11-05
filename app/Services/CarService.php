<?php

namespace App\Services;

use App\Models\Car;

class CarService
{
    public function store(array $carData): Car
    {
        $car = Car::create($carData);

        // Create parts
        $car->parts()->createMany($carData['parts'] ?? []);

        return $car;
    }

    public function update(array $carData, Car $car): Car
    {
        // Update car
        $car->update($carData);

        $parts = $carData['parts'] ?? [];
        $partIds = collect($parts)->pluck('id')->filter()->toArray();

        // Delete removed parts
        $car->parts()->whereNotIn('id', $partIds)->delete();

        // Update/Create parts
        foreach ($parts as $partData) {
            if (isset($partData['id'])) {
                $part = $car->parts()->find($partData['id']);
                if ($part) {
                    $part->update($partData);
                }
            } else {
                $car->parts()->create($partData);
            }
        }

        return $car;
    }
}
