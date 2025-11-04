<script setup lang="ts">
import { Part } from '@/types';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';

interface Props {
    part: Part;
}

defineProps<Props>();
</script>
<template>
    <Head title="Edit part" />

    <AppLayout :title="`Edit part - ${part.id}`">
        {{ part }}
    </AppLayout>
</template>
