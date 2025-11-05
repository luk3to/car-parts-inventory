<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { PartFormData, Car } from '@/types';

interface Props {
    cars: Car[];
    initialValues?: Partial<PartFormData>;
}

const props = withDefaults(defineProps<Props>(), {
    initialValues: () => ({}),
});

const emit = defineEmits<{
    (e: 'submit', form: ReturnType<typeof useForm<PartFormData>>): void;
}>();

const form = useForm<PartFormData>({
    car_id: props.initialValues.car_id ?? undefined,
    serial_number: props.initialValues.serial_number ?? '',
    name: props.initialValues.name ?? '',
});

const submitForm = () => emit('submit', form);
</script>

<template>
    <form @submit.prevent="submitForm">
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

        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
                <label class="form-label">Serial number</label>
                <input
                    v-model="form.serial_number"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.serial_number }"
                    required
                />
                <div class="invalid-feedback">
                    {{ form.errors.serial_number }}
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div class="form-group">
                    <label for="car_id" class="form-label">Car</label>
                    <select
                        v-model="form.car_id"
                        class="form-control"
                        id="car_id"
                        :class="{ 'is-invalid': form.errors.car_id }"
                    >
                        <option
                            v-for="car in cars"
                            :key="car.id"
                            :value="car.id"
                        >
                            {{ car.name }}
                        </option>
                    </select>
                    <div class="invalid-feedback">
                        {{ form.errors.car_id }}
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-start">
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>
</template>
