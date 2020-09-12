<template>
    <div class="v-toast">
        <slot>{{text}}</slot>
    </div>
</template>

<script>
    export default {
        name: 'wToast'
    }
</script>

<style lang="" scoped>
    .v-toast {background-color: #ff0000;color: #000000;}
</style>