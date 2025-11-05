<script setup lang="ts">
import { Car } from '@/types';
import { edit as carsEdit, destroy as carsDestroy } from '@/routes/cars';
import { router, Link } from '@inertiajs/vue3';

interface Props {
    cars: Car[];
}

withDefaults(defineProps<Props>(), {
    cars: () => [],
});

const deleteCar = (id: number) => {
    if (confirm(`Are you sure you want to delete the car with ID: ${id} ?`)) {
        router.visit(carsDestroy(id));
    }
};
</script>
<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Registration number</th>
                    <th scope="col" class="text-center">Is registered</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="car in cars" :key="car.id" class="cursor-pointer">
                    <th scope="row">{{ car.id }}</th>
                    <td>{{ car.name }}</td>
                    <td>{{ car.registration_number }}</td>
                    <td class="text-center">
                        <i
                            v-if="car.is_registered"
                            class="bi bi-check"
                            style="font-size: 1.25rem; color: green"
                        ></i>
                        <i
                            v-else
                            class="bi bi-x"
                            style="font-size: 1.25rem; color: red"
                        ></i>
                    </td>
                    <td>
                        <div class="d-flex justify-content-end gap-1">
                            <Link :href="carsEdit(car.id).url"
                                ><button
                                    type="button"
                                    class="btn btn-sm btn-secondary"
                                >
                                    <i class="bi bi-pencil-square"></i></button
                            ></Link>
                            <button
                                type="button"
                                class="btn btn-sm btn-danger"
                                @click="deleteCar(car.id)"
                            >
                                <i class="bi bi-trash3-fill"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
