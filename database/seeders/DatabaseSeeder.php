<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Part;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Car::factory(20)
            ->has(Part::factory(4))
            ->create();
    }
}
