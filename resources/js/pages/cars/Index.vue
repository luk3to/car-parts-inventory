<script setup lang="ts">
import { Car } from '@/types';
import { create as carsCreate } from '@/routes/cars';
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import CarsTable from '@/components/cars/CarsTable.vue';

interface Props {
    cars: Car[];
}

withDefaults(defineProps<Props>(), {
    cars: () => [],
});

const title = 'Cars';
</script>
<template>
    <Head :title="title" />

    <AppLayout :title="title">
        <template #actions>
            <Link :href="carsCreate().url"
                ><button class="btn btn-secondary">
                    <i class="bi bi-plus"></i> Add car
                </button></Link
            >
        </template>

        <CarsTable :cars="cars" />
    </AppLayout>
</template>
