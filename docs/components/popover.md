---
title: Popover 弹出框
---

# 弹出层
### 引入
```js
import {wButton,wPopover} from 'vanb-ui-v2'


export default {
  components: {
    wButton,
    wPopover
  }
}
```

### 基本用法

<ClientOnly>
  <popover-demo-1></popover-demo-1>
</ClientOnly>

### 示例代码:

```js
// click触发
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

// hover 触发
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
```

# API
### Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
position | 设置弹出框相对触发区域的位置,可选有`left、right、bottom` | String | top
trigger | 触发方式,可选值:hover | String | click

### Slots
参数 | 说明 
--- | --- 
default | 被触发元素的内容
content | 弹出框显示的内容
