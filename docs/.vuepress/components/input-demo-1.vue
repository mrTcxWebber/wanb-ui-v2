<template>
  <div>
    <h3>用法</h3>
    <div class="vanb-doc-demo-block">
      <w-input placeholder="测试1"></w-input>
    </div>
    <div class="vanb-doc-demo-block">
      <w-input placeholder="测试2" disabled></w-input>
    </div>
    <div class="vanb-doc-demo-block">
      <w-input placeholder="测试3" readonly />
    </div>
    <div class="vanb-doc-demo-block">
      <w-input placeholder="测试4" value="有点怕" error="密码长度为5"></w-input>
    </div>
    <div class="vanb-doc-demo-block">
      <w-input placeholder="测试5" v-model="dbtxt"></w-input>
      <p>{{dbtxt}}</p>
    </div>

  </div>
</template>
<script>
  import wInput from '../../../src/input.vue'

  export default {
    components: { wInput },
    data() {
      return {
        dbtxt: ''
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