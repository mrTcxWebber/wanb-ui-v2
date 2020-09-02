<template>
    <div>
        <g-button>
            按钮
        </g-button>
        <g-button icon="setting">
            按钮2
        </g-button>
        <g-button icon="setting" icon-position="right">
            按钮3
        </g-button>
    </div>
</template>
<script>
    import gButton from "./button.vue"
    export default {
        name: 'app',
        components: { gButton }
    }
</script>
<style lang="scss">

</style>