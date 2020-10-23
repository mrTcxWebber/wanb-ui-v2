<template>
  <div style="padding-top: 16px;">
    <div class="vanb-doc-demo-block">
      <h3>click 触发</h3>
      <w-popover position="bottom">
        <template slot="content" slot-scope="{close}">
          <div>文字</div>
          <div>popover <a href="http://qq.com">看新网</a> 内容</div>
          <w-button>关闭</w-button>
        </template>
        <w-button>点我</w-button>
      </w-popover>
      <w-popover position="top">
        <template slot="content">
          <div>popover内容
            <w-button>关闭</w-button>
          </div>
        </template>
        <w-button>点我</w-button>
      </w-popover>
      <w-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <w-button>点我</w-button>
      </w-popover>
      <w-popover position="right">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <w-button>点我</w-button>
      </w-popover>
      <p>
        <strong>代码</strong>
      </p>
    </div>
    <div class="vanb-doc-demo-block">
      <h3>hover触发popover</h3>
      <w-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>1</div>
          <div>1</div>
        </template>
        <w-button>鼠标移入</w-button>
      </w-popover>
      <w-popover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <w-button>鼠标移入</w-button>
      </w-popover>
      <w-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <w-button>鼠标移入</w-button>
      </w-popover>
      <w-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover <a href="http://qq.com">看新网</a> 内容</div>
        </template>
        <w-button>鼠标移入</w-button>
      </w-popover>

    </div>
  </div>
</template>

<script>
  import wButton from '../../../src/button.vue'
  import wPopover from '../../../src/popover.vue'


  export default {
    components: { wButton, wPopover },
    data() {
      return {

      }
    },
    methods: {
    },
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