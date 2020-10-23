<template>
  <div class="vanb-doc-demo-block">
    <h3>Layout布局 gutter="20"</h3>
    <w-row gutter="20">
      <w-col span="24" :pc="{span:12}" :narrowPc="{span:8}">1</w-col>
      <w-col span="24" :pc="{span:12}" :narrowPc="{span:8}">2</w-col>
      <w-col span="24" :pc="{span:12}" :narrowPc="{span:8}">3</w-col>
    </w-row>

    <h3>Layout布局 narrowPc:8</h3>
    <w-row>
      <w-col span="12" :narrowPc="{span:8}">1</w-col>
      <w-col span="12" :narrowPc="{span:8}">2</w-col>
      <w-col span="12" :narrowPc="{span:8}">3</w-col>
    </w-row>
    <pre>
      <code>
        <w-row>
          <w-col span="12" :narrowPc="{span:8}">1</w-col>
          <w-col span="12" :narrowPc="{span:8}">2</w-col>
          <w-col span="12" :narrowPc="{span:8}">3</w-col>
        </w-row>
      </code>
    </pre>
    <h3>Layout布局 设置narrowPc</h3>
    <w-row>
      <w-col span="12" :narrowPc="{span:12,offset:10}">1</w-col>
    </w-row>

    <h3>Layout布局 偏移量</h3>
    <w-row>
      <w-col span="1" offset="1">1</w-col>
      <w-col span="12" offset="11">1</w-col>
    </w-row>


  </div>

</template>

<script>
  import wRow from '../../../src/row.vue'
  import wCol from '../../../src/col.vue'

  export default {
    components: { wRow, wCol },
    data() {
      return {
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