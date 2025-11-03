<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { partsIndex } from '@/routes';
</script>
<template>
    <Head title="Cars" />

    <div class="container-fluid">
        <h1>Cars</h1>

        <a :href="partsIndex().url">
            <button class="btn btn-primary">Parts</button>
        </a>
    </div>
</template>
