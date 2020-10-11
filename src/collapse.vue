<template>
    <div class="w-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "collapse",
        model: {
            prop: 'selected',
            event: 'toSelected'
        },
        props: {
            accordion: {
                type: Boolean,
                default: false
            },
            selected: {
                type: [Array, String, Number]
            }
        },
        data() {
            return {
                currentSelected: this.selected
            }
        },
        watch: {
        },
        mounted() {
        },
        methods: {
            switch(name, expanded) {
                if (!this.accordion) {
                    name = expanded
                        ? this.currentSelected.concat(name)
                        : this.currentSelected.filter((activeName) => activeName != name)
                }
                this.currentSelected = name
                this.$emit('toSelected', name);
                this.$emit('input', name);
            }
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;

    .w-collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>