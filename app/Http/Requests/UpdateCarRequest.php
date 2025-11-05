<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCarRequest extends FormRequest
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
        $rules = [
            'name' => 'required|string|max:255',
            'is_registered' => 'boolean',
            'registration_number' => 'required_if:is_registered,true',
            'parts' => 'array',
        ];

        foreach (request()->get('parts', []) as $index => $part) {
            $partId = $part['id'] ?? null;

            $rules['parts.' . $index . '.id'] = 'nullable|integer|exists:parts,id';
            $rules['parts.' . $index . '.name'] = 'required|string|max:255';
            $rules['parts.' . $index . '.serial_number'] = 'required|max:255|unique:parts,serial_number,' . $partId;
        }

        return $rules;
    }
}
