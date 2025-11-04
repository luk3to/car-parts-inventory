<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
interface Props {
    title: string;
}

withDefaults(defineProps<Props>(), {
    title: () => '',
});
</script>
<template>
    <AppHeader />
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 px-md-4">
                    <div
                        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom"
                    >
                        <h2>{{ title }}</h2>
                        <slot name="actions" />
                    </div>
                    <slot />
                </div>
            </div>
        </div>
    </main>
</template>
