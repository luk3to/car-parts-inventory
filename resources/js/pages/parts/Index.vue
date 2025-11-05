<script setup lang="ts">
import { Part, PartFiltersData } from '@/types';
import { create as partsCreate } from '@/routes/parts';
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import PartsTable from '@/components/parts/PartsTable.vue';
import PartsFilters from '@/components/parts/PartsFilters.vue';

interface Props {
    parts: Part[];
    filters?: PartFiltersData;
}

withDefaults(defineProps<Props>(), {
    parts: () => [],
});

const title = 'Parts';
</script>
<template>
    <Head :title="title" />

    <AppLayout :title="title">
        <template #actions>
            <Link :href="partsCreate().url"
                ><button class="btn btn-secondary">
                    <i class="bi bi-plus"></i> Add part
                </button></Link
            >
        </template>

        <PartsFilters :filters="filters" />
        <PartsTable :parts="parts" />
    </AppLayout>
</template>
