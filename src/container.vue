<template>
    <section class="v-container" :class="{'v-container-has-aside': hasAside}">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'vContainer',
        data() {
            return {
                hasAside: false
            }
        },
        mounted() {
            this.$children.forEach((c) => {
                // console.log(c.$options.name);
                if (c.$options.name === 'vAside') {
                    this.hasAside = true
                }
            })
        },
    }
</script>

<style>
    .v-container {
        display: flex;
        box-sizing: border-box;
        flex: 1;
        flex-direction: column;
    }

    .v-container-has-aside {
        /* flex-wrap: ; */
        flex-direction: row;
    }
</style>