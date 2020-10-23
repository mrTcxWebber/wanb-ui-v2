---
title: Collapse 折叠面板
---
# 按钮

### 引入
```js
import {wCollapse, wCollapseItem} from 'vanb-ui-v2'


export default {
  components: {
    wCollapse,
    wCollapseItem
  }
}
```

### 基本用法

<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
</ClientOnly>

### 示例代码:

```vue
// 基础用法
<w-collapse v-model="activeNamesA" style="width:360px;">
    <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
    <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
    <w-collapse-item title="标题3" name="3" disabled>内容3</w-collapse-item>
</w-collapse>

// 手风琴
<w-collapse v-model="activeNamesB" accordion style="width:360px;">
    <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
    <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
    <w-collapse-item title="标题3" name="3" disabled>内容3</w-collapse-item>
</w-collapse>

data(){
  return {
      activeNamesA: ['2'],
      activeNamesB: 3
  }
}
```

# API
### Collapse Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
v-model (selected) | 当前选中值,若为手风琴模式则不是数组 | string[], number[], string, number | -
accordion | 是否为手风琴模式 | Boolean | false

### Collapse-item Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
name | 当前项索引值 | Number, String | -
title | 当前项标题 | String | -
disabled | 设置禁止展开 | Boolean | false

### Collapse Event
参数 | 说明 | 回调
--- | --- | ---
change | 当前打开项的name,若为手风琴模式则不是数组 | name: Array, String
