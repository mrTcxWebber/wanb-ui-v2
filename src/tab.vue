<template>
        <div class="w-tab-panel" v-if="currentVm.animated">
            <slot></slot>
        </div>
        <div v-else>
            <div v-show="currentVm.curIndex == index" class="w-tab-panel">
                <slot></slot>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'wTab',
        inject: ['currentVm'],
        props: {
            title: {
                type: String,
                required: true
            },
            index: {
                type: [String,Number],
                required: true,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        components: {
        },
        data(){
            return {
            }
        },
        mounted(){
        },
        destroyed() {
        },
        watch: {
        },
        computed: {
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" >
    .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .w-tab-panel {
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        box-sizing: border-box;
        width: 100%;
    }
</style>