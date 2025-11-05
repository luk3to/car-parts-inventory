<script setup lang="ts">
import { reactive } from 'vue';
import { PartFiltersData } from '@/types';
import { router } from '@inertiajs/vue3';
import { index as partsIndex } from '@/routes/parts';

interface Props {
    filters?: PartFiltersData;
}

const props = defineProps<Props>();
const filters = reactive<PartFiltersData>({
    serial_number: props.filters?.serial_number || '',
    name: props.filters?.name || '',
});

const applyFilters = () => {
    // Trim filter values
    filters.serial_number = filters.serial_number.trim();
    filters.name = filters.name.trim();

    // Remove empty values for the request
    const filtersData = Object.fromEntries(
        Object.entries(filters).filter(
            ([, value]) => value !== '' && value != null,
        ),
    );

    router.get(partsIndex().url, filtersData, {
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
                        v-model="filters.serial_number"
                        type="text"
                        placeholder="Serial number"
                        class="form-control"
                    />
                </div>
                <div class="col-md-4 col-lg-3 col-xl-2">
                    <input
                        v-model="filters.name"
                        type="text"
                        placeholder="Name"
                        class="form-control"
                    />
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
