<template>
    <div>
        <w-button :loading="loading1" @click="loading1 = !loading1">
            按钮
        </w-button>
        <w-button icon="setting" :loading="loading2" @click="loading2 = !loading2">
            按钮2
        </w-button>
        <w-button icon="setting" icon-position="right" :loading="loading3" @click="loading3 = !loading3">
            按钮3
        </w-button>

        <w-button-group>
            <w-button icon="left">上一页</w-button>
            <w-button>更多</w-button>
            <w-button icon="right" icon-position="right">下一页</w-button>
        </w-button-group>
    </div>
</template>
<script>
    import wButton from "./button.vue"
    import wButtonGroup from "./button-group.vue"
    export default {
        name: 'app',
        components: { wButton, wButtonGroup },
        data() {
            return {
                loading1: false,
                loading2: true,
                loading3: false
            }
        },
        methods: {
        },
    }
</script>
<style lang="scss">

</style>