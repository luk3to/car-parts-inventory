<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { CarFormData } from '@/types';

interface Props {
    initialValues?: Partial<CarFormData>;
}

const props = withDefaults(defineProps<Props>(), {
    initialValues: () => ({}),
});

const emit = defineEmits<{
    (e: 'submit', form: ReturnType<typeof useForm<CarFormData>>): void;
}>();

const form = useForm<CarFormData>({
    name: props.initialValues.name ?? '',
    registration_number: props.initialValues.registration_number ?? '',
    is_registered: props.initialValues.is_registered ?? false,
    parts: props.initialValues.parts ?? [],
});

const addPart = () => {
    form.parts.push({ name: '', serial_number: '' });
};

const removePart = (index: number) => {
    form.parts.splice(index, 1);
};

const submitForm = () => emit('submit', form);
</script>

<template>
    <form @submit.prevent="submitForm">
        <!-- Car -->
        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
                <label class="form-label">Name</label>
                <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.name }"
                    required
                />
                <div class="invalid-feedback">{{ form.errors.name }}</div>
            </div>
        </div>

        <div class="form-check form-switch mb-4">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="form.is_registered"
                id="is_registered"
            />
            <label class="form-check-label" for="is_registered"
                >Is registered</label
            >
        </div>

        <div v-show="form.is_registered" class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5">
                <label class="form-label">Registration number</label>
                <input
                    v-model="form.registration_number"
                    type="text"
                    class="form-control"
                    :class="{
                        'is-invalid': form.errors.registration_number,
                    }"
                />
                <div class="invalid-feedback">
                    {{ form.errors.registration_number }}
                </div>
            </div>
        </div>

        <!-- Parts -->
        <h5>Parts</h5>
        <button
            type="button"
            class="btn btn-sm btn-outline-secondary mb-2"
            @click="addPart"
        >
            Add part
        </button>
        <div class="row">
            <div class="col-xl-6 col-lg-8 col-md-10">
                <div
                    v-for="(part, index) in form.parts"
                    :key="index"
                    class="border rounded px-3 py-2 mb-2 bg-light"
                >
                    <div class="row">
                        <div class="col-md-5 mb-2">
                            <label class="form-label">Name</label>
                            <input
                                v-model="part.name"
                                type="text"
                                class="form-control form-control-sm"
                                :class="{
                                    'is-invalid':
                                        form.errors[`parts.${index}.name`],
                                }"
                                required
                            />
                            <div class="invalid-feedback">
                                {{ form.errors[`parts.${index}.name`] }}
                            </div>
                        </div>

                        <div class="col-md-5 mb-2">
                            <label class="form-label">Serial number</label>
                            <input
                                v-model="part.serial_number"
                                type="text"
                                class="form-control form-control-sm"
                                :class="{
                                    'is-invalid':
                                        form.errors[
                                            `parts.${index}.serial_number`
                                        ],
                                }"
                                required
                            />
                            <div class="invalid-feedback">
                                {{
                                    form.errors[`parts.${index}.serial_number`]
                                }}
                            </div>
                        </div>

                        <div class="col-md-2 d-flex align-items-end mb-2">
                            <button
                                type="button"
                                class="btn btn-danger btn-sm"
                                @click="removePart(index)"
                            >
                                <i class="bi bi-trash3-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-start mt-5">
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>
</template>
