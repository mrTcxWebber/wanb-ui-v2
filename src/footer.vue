<template>
    <footer class="v-footer">
        <slot></slot>
    </footer>
</template>
<script>
    export default {
        name: 'vFooter'
    }
</script>

<style>
    .v-footer {
        flex-grow: 1;
    }
</style>