<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePartRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $partId = request()->route('part')->id ?? null;

        return [
            'car_id' => 'required|exists:cars,id',
            'serial_number' => 'required|max:255|unique:parts,serial_number,' . $partId,
            'name' => 'required|string|max:255',
        ];
    }
}
