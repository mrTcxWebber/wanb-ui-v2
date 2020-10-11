<template>
    <div class="w-collapse-item">
        <div class="w-collapse-head w-collapse--clickable"
            :class="{'active': expanded,'w-collapse-item-disabled':disabled}" @click="onClick">
            <div class="title">
                <span>{{title}}</span>
            </div>
            <i class="w-collapse-arrow collapse-icon" :class="{'top': expanded}">
                <w-icon name="bottom"></w-icon>
            </i>
        </div>
        <div class="w-collapse-wrap" ref="wrapper" v-show="show" @transitionend="onTransitionEnd"
            @transitionstart="onTransitionStart">
            <div ref="content" class="w-collapse-content">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>
    import { raf, doubleRaf } from './tabs-utils.js';
    import wIcon from "./icon.vue";
    export default {
        name: "collapseItem",
        components: {
            wIcon
        },
        props: {
            name: {
                type: [Number, String],
                required: true
            },
            title: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                show: false
            };
        },
        computed: {
            expanded() {
                if (this.disabled) return false;
                const {
                    accordion,
                    selected
                } = this.$parent;
                const re = accordion ? selected == this.name : selected.indexOf(this.name) !== -1

                return re;
            }
        },
        watch: {
            expanded(expanded) {
                if (this.disabled) return;
                if (expanded) {
                    this.show = true;
                }
                const nextTick = expanded ? this.$nextTick : raf;
                nextTick(() => {
                    const { content, wrapper } = this.$refs;

                    const { offsetHeight } = content;
                    if (offsetHeight) {
                        const contentHeight = `${offsetHeight}px`;
                        wrapper.style.height = expanded ? 0 : contentHeight;

                        // use double raf to ensure animation can start
                        doubleRaf(() => {
                            wrapper.style.height = expanded ? contentHeight : 0;
                        });
                    } else {
                        this.onTransitionEnd();
                    }
                });
            }
        },
        created() {
            this.show = this.expanded;
        },
        mounted() {
        },
        methods: {
            onClick() {
                if (!this.disabled) {
                    this.toggle();
                }
            },
            toggle(expanded = !this.expanded) {
                const {
                    accordion,
                    selected
                } = this.$parent;
                const isNeedClose = accordion && this.name == selected;
                const name = isNeedClose ? "" : this.name;
                this.$parent.switch(name, expanded);
            },
            onTransitionEnd() {
                if (!this.expanded) {
                    this.show = false;
                } else {
                    this.$refs.wrapper.style.height = '';
                }
            },
            onTransitionStart() {
            }
        }
    };
</script>

<style lang="scss" scoped>
    $animation-duration: 0.5s;

    @-webkit-keyframes wanb-fade-in {
        0% {
            height: 0px;
        }

        to {
            height: 200px;
        }
    }

    @-webkit-keyframes wanb-fade-out {
        0% {
            height: 200px;
        }

        to {
            height: 0px;
        }
    }

    .wanb-fade-enter-active {
        -webkit-animation: $animation-duration wanb-fade-in;
        animation: $animation-duration wanb-fade-in;
    }

    .wanb-fade-leave-active {
        -webkit-animation: $animation-duration wanb-fade-out;
        animation: $animation-duration wanb-fade-out;
    }

    .w-collapse-item {
        position: relative;

        .w-collapse-item-disabled {
            color: #C8C9CB;
            cursor: not-allowed;

            .collapse-icon {
                fill: #C8C9CB;
            }
        }

        &:not(:first-child)::after {
            position: absolute;
            box-sizing: border-box;
            content: " ";
            pointer-events: none;
            top: 0;
            right: 16px;
            left: 16px;
            border-top: 1px solid #f00;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
    }

    .w-collapse-head {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 16px;
        overflow: hidden;
        color: #323233;
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
        align-items: center;

        &.active::after {
            display: block;
        }

        &::after {
            position: absolute;
            box-sizing: border-box;
            content: " ";
            pointer-events: none;
            right: 16px;
            bottom: 0;
            left: 16px;
            border-bottom: 1px solid #0ff;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            display: none;
        }
    }

    .w-collapse--clickable {
        cursor: pointer;

        &:active {
            background-color: #f7f8fa;
        }
    }

    .title {
        flex: 1;
    }

    .w-collapse-arrow {
        height: 24px;
        line-height: 24px;
        min-width: 1em;
        font-size: 16px;
        fill: #969799;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        transition: transform 0.3s, -webkit-transform 0.3s;

        &.top {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    }

    .w-collapse-wrap {
        overflow: hidden;
        -webkit-transition: height .3s ease-in-out;
        transition: height .3s ease-in-out;
        will-change: height;

        .w-collapse-content {
            padding: 12px 16px;
            color: #969799;
            font-size: 14px;
            line-height: 1.5;
            background-color: #fff;
        }

        &.panel--show {
            height: auto;
        }

        &.panel--hide {
            height: 0;
        }
    }
</style>