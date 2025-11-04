<script setup lang="ts">
import { Car } from '@/types';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';

interface Props {
    car: Car;
}

defineProps<Props>();
</script>
<template>
    <Head title="Edit car" />

    <AppLayout :title="`Edit car - ${car.id}`">
        {{ car }}
    </AppLayout>
</template>
