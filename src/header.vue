<template>
    <header class="v-header">
        <slot></slot>
    </header>
</template>
<script>
    export default {
        name: 'vHeader'
    }
</script>

<style>
    .v-header {
        flex-grow: 1;
    }
</style>