<script setup lang="ts">
import { Car, CarFiltersData } from '@/types';
import { create as carsCreate } from '@/routes/cars';
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import CarsTable from '@/components/cars/CarsTable.vue';
import CarsFilters from '@/components/cars/CarsFilters.vue';

interface Props {
    cars: Car[];
    filters?: CarFiltersData;
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

        <CarsFilters :filters="filters" />
        <CarsTable :cars="cars" />
    </AppLayout>
</template>
