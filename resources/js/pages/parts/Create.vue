<script setup lang="ts">
import { Car } from '@/types';
import { Head } from '@inertiajs/vue3';
import { store as partsStore } from '@/routes/parts';
import AppLayout from '@/layouts/AppLayout.vue';
import PartsForm from '@/components/parts/PartsForm.vue';

interface Props {
    cars: Car[];
}

withDefaults(defineProps<Props>(), {
    cars: () => [],
});

const title = 'Add part';
</script>
<template>
    <Head :title="title" />

    <AppLayout :title="title">
        <PartsForm
            :cars="cars"
            @submit="(form) => form.post(partsStore().url)"
        />
    </AppLayout>
</template>
