<template>
    <main class="v-main">
        <slot></slot>
    </main>
</template>
<script>
    export default {
        name: 'vMain'
    }
</script>

<style>
    .v-main {
        flex-grow: 1;
    }
</style>