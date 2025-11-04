<script setup lang="ts">
import { index as carsIndex } from '@/routes/cars';
import { index as partsIndex } from '@/routes/parts';
import { usePage, Link } from '@inertiajs/vue3';
import { NavItem } from '@/types';

const page = usePage();

const navItems: NavItem[] = [
    { href: carsIndex().url, label: 'Cars' },
    { href: partsIndex().url, label: 'Parts' },
];

const isActive = (href: string) => {
    return page.url.startsWith(href);
};
</script>
<template>
    <header>
        <nav class="navbar navbar-expand navbar-dark bg-secondary">
            <div class="container-fluid">
                <Link href="/" class="navbar-brand">{{
                    $page.props.appName
                }}</Link>

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li
                            class="nav-item"
                            v-for="(item, index) in navItems"
                            :key="index"
                        >
                            <Link
                                :href="item.href"
                                class="nav-link"
                                :class="{ active: isActive(item.href) }"
                                >{{ item.label }}</Link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
