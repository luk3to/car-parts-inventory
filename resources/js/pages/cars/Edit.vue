<script setup lang="ts">
import { Car } from '@/types';
import { Head } from '@inertiajs/vue3';
import { update as carsUpdate } from '@/routes/cars';
import AppLayout from '@/layouts/AppLayout.vue';
import CarsForm from '@/components/cars/CarsForm.vue';

interface Props {
    car: Car;
}

const props = defineProps<Props>();
const title = `Edit car: #${props.car.id}`;
</script>
<template>
    <Head :title="title" />

    <AppLayout :title="title">
        <CarsForm
            :initial-values="car"
            @submit="(form) => form.put(carsUpdate(car.id).url)"
        />
    </AppLayout>
</template>
