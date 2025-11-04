<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\PartController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('cars.index');
});

Route::resource('cars', CarController::class, ['except' => ['show']]);
Route::resource('parts', PartController::class, ['except' => ['show']]);
