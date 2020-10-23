<template>
  <div class="vanb-doc-demo-block">
    <h3>用法</h3>
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
  import wButton from '../../../src/button.vue'
  import wButtonGroup from "../../../src/button-group.vue"

  export default {
    components: {
      wButton,
      wButtonGroup
    },
    data() {
      return {
        loading1: false,
        loading2: true,
        loading3: false
      }
    }
  }
</script>

<style>
  .vanb-doc-demo-block {
    margin: 15px;

  }

  .vanb-doc-demo-block h3 {
    margin-bottom: 10px;
  }

  .col {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

  }

  .col:nth-child(even) {
    background-color: #66c6f2;
  }

  .col:nth-child(odd) {
    background-color: #39a9ed;
  }

  .v-container {
    text-align: center;
  }

  .v-footer,
  .v-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .v-aside {
    background-color: #d3dce6;

    line-height: 200px;
  }

  .v-main {
    background-color: #e9eef3;
    color: #333;
    line-height: 160px;
  }
</style>