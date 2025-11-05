<script setup lang="ts">
import { Part } from '@/types';
import { create as partsCreate } from '@/routes/parts';
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import PartsTable from '@/components/parts/PartsTable.vue';

interface Props {
    parts: Part[];
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

        <PartsTable :parts="parts" />
    </AppLayout>
</template>
