---
title: Button 按钮
---
# 按钮

### 引入
```js
import {wButton, wButtonGroup} from 'vanb-ui-v2'


export default {
  components: {
    wButton,
    wButtonGroup
  }
}
```

### 基本用法

<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

### 示例代码:

```vue
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

data(){
  return {
      loading1: false,
      loading2: true,
      loading3: false,
  }
}
```

# API
### Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
icon | 内置图标名称,可选有`info`,`loading`,`success`,`error`,`setting` | String | ---
iconPosition | 图标位置,可选有`right` | String | left
loading | 加载状态的icon，只在字体左边 | Boolean | false

### Event
参数 | 说明 | 回调
--- | --- | ---
click | 点击按钮 | event: Event
