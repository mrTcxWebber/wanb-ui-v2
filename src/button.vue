<template>
  <button class="w-button" :class="[`icon-${iconPosition}`]" @click="$emit('click','10萨比')">
    <!-- <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg> -->
    <w-icon v-if="icon && !loading" class="icon" :name="icon"></w-icon>
    <w-icon v-if="loading" class="loading" name="loading"></w-icon>
    <div class="content test23456">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import wIcon from "./icon.vue"
  export default {
    props: {
      icon: {
        type: String,
        default: ''
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) { // 验证非左或者非右
          return value === 'left' || value === 'right'
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    components: { wIcon },
    mounted() {
      // console.log(this.icon)
    },
  }
</script>
/* eslint-disable */
<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .w-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    line-height: 1;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    >.content {
      order: 2;
    }

    >.icon {
      order: 1;
      margin-right: .2em;
    }

    &.icon-right {
      >.content {
        order: 1;
      }

      >.icon {
        order: 2;
        margin-right: 0;
        margin-left: .2em;
      }
    }

    >.loading {
      animation: spin 2s infinite linear;
      margin-right: 0.2em;
    }
  }
</style>