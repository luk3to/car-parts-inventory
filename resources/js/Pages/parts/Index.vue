<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { carsIndex } from '@/routes';
</script>
<template>
    <Head title="Parts" />

    <div class="container-fluid">
        <h1>Parts</h1>

        <a :href="carsIndex().url">
            <button class="btn btn-primary">Cars</button>
        </a>
    </div>
</template>
