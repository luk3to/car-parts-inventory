<script setup lang="ts">
import { Part } from '@/types';
import { edit as partsEdit, destroy as partsDestroy } from '@/routes/parts';
import { router, Link } from '@inertiajs/vue3';

interface Props {
    parts: Part[];
}

withDefaults(defineProps<Props>(), {
    parts: () => [],
});

const deletePart = (id: number) => {
    if (
        confirm(
            'Are you sure you want to delete the part with ID: ' + id + ' ?',
        )
    ) {
        router.visit(partsDestroy(id));
    }
};
</script>
<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Serial number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Car</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="part in parts" :key="part.id">
                    <th scope="row">{{ part.id }}</th>
                    <td>{{ part.serial_number }}</td>
                    <td>{{ part.name }}</td>
                    <td>{{ part.car.name }}</td>
                    <td>
                        <div class="d-flex justify-content-end gap-1">
                            <Link :href="partsEdit(part.id).url"
                                ><button
                                    type="button"
                                    class="btn btn-sm btn-secondary"
                                >
                                    <i class="bi bi-pencil-square"></i></button
                            ></Link>
                            <button
                                type="button"
                                class="btn btn-sm btn-danger"
                                @click="deletePart(part.id)"
                            >
                                <i class="bi bi-trash3-fill"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
