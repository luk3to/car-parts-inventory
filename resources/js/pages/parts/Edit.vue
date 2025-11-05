<script setup lang="ts">
import { Car, Part } from '@/types';
import { Head } from '@inertiajs/vue3';
import { update as partsUpdate } from '@/routes/parts';
import AppLayout from '@/layouts/AppLayout.vue';
import PartsForm from '@/components/parts/PartsForm.vue';

interface Props {
    part: Part;
    cars: Car[];
}

const props = withDefaults(defineProps<Props>(), {
    cars: () => [],
});

const title = `Edit part: #${props.part.id}`;
</script>
<template>
    <Head :title="title" />

    <AppLayout :title="title">
        <PartsForm
            :cars="cars"
            :initialValues="part"
            @submit="(form) => form.put(partsUpdate(part.id).url)"
        />
    </AppLayout>
</template>
