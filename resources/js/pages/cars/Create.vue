<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { store as carsStore } from '@/routes/cars';
import AppLayout from '@/layouts/AppLayout.vue';
import CarsForm from '@/components/cars/CarsForm.vue';

const title = 'Add car';
</script>
<template>
    <Head :title="title" />

    <AppLayout :title="title">
        <CarsForm @submit="(form) => form.post(carsStore().url)" />
    </AppLayout>
</template>
