<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\PartController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('carsIndex');
});

Route::get('/cars', [CarController::class, 'index'])->name('carsIndex');
Route::get('/parts', [PartController::class, 'index'])->name('partsIndex');
