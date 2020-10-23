---
title: Grid 栅格化
---
# 网格

### 引入
```js
import {wRow, wCol} from 'vanb-ui-v2'


export default {
  components: {
    wRow, wCol
  }
}
```

### 基本用法

<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

### 示例代码:

```vue
// 间隔20px
<w-row gutter="20">
  <w-col span="24">1</w-col>
  <w-col span="24">2</w-col>
  <w-col span="24">3</w-col>
</w-row>

// 偏移量
<w-row>
  <w-col span="1" offset="1">1</w-col>
  <w-col span="12" offset="11">1</w-col>
</w-row>


```

# API
### Row Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
gutter| 间隔 | Number, String | ---
position | 对齐方式,可选有`center`,`right` | String | left

### Col Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
span | 占据的列数,可选值1-24 | Number, String | -
offset | 列数偏移量 | Number,String | -
ipad | 在ipad设备大小下占据的列数,可选值:{span:1;offset:1} | Object | -
narrowPc | 在窄PC占据的列数,可选值:{span:1;offset:1} | Object | -
pc | 在PC占据的列数,可选值:{span:1;offset:1} | Object | -
widePc | 在宽PC占据的列数,可选值:{span:1;offset:1} | Object | -