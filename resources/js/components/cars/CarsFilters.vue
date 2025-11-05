<script setup lang="ts">
import { reactive } from 'vue';
import { CarFiltersData } from '@/types';
import { router } from '@inertiajs/vue3';
import { index as carsIndex } from '@/routes/cars';

interface Props {
    filters?: CarFiltersData;
}

const props = defineProps<Props>();
const filters = reactive<CarFiltersData>({
    name: props.filters?.name || '',
    registration_number: props.filters?.registration_number || '',
    is_registered: props.filters?.is_registered || '',
});

const applyFilters = () => {
    // Trim filter values
    filters.name = filters.name.trim();
    filters.registration_number = filters.registration_number.trim();
    filters.is_registered = filters.is_registered.trim();

    // Remove empty values for the request
    const filtersData = Object.fromEntries(
        Object.entries(filters).filter(
            ([, value]) => value !== '' && value != null,
        ),
    );

    router.get(carsIndex().url, filtersData, {
        preserveState: true,
        preserveScroll: true,
    });
};
</script>
<template>
    <div class="mb-4">
        <form @submit.prevent="applyFilters">
            <div class="row g-2 justify-content-end">
                <div class="col-md-4 col-lg-3 col-xl-2">
                    <input
                        v-model="filters.name"
                        type="text"
                        placeholder="Name"
                        class="form-control"
                    />
                </div>
                <div class="col-md-4 col-lg-3 col-xl-2">
                    <input
                        v-model="filters.registration_number"
                        type="text"
                        placeholder="Registration number"
                        class="form-control"
                    />
                </div>
                <div class="col-md-4 col-lg-3 col-xl-2">
                    <select v-model="filters.is_registered" class="form-select">
                        <option value="">All</option>
                        <option value="1">Registered</option>
                        <option value="0">Not registered</option>
                    </select>
                </div>
                <div class="col-md-1 d-grid">
                    <button type="submit" class="btn btn-secondary">
                        Filter
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
