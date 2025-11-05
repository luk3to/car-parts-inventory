<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePartRequest;
use App\Http\Requests\UpdatePartRequest;
use App\Models\Car;
use App\Models\Part;
use Inertia\Inertia;

class PartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $parts = Part::filter()->with('car:id,name')->get();

        return Inertia::render('parts/Index', ['parts' => $parts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('parts/Create', ['cars' => Car::all(['id', 'name'])]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePartRequest $request)
    {
        Part::create($request->validated());

        return redirect()->route('parts.index')->with('success', 'Part created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Part $part)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Part $part)
    {
        $cars = Car::all(['id', 'name']);

        return Inertia::render('parts/Edit', ['part' => $part, 'cars' => $cars]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePartRequest $request, Part $part)
    {
        $part->update($request->validated());

        return redirect()->route('parts.index')->with('success', 'Part updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Part $part)
    {
        $part->delete();

        return redirect()->route('parts.index')->with('success', 'Part deleted.');
    }
}
