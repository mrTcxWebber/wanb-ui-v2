---
title: Input 输入框
---
# 输入框

### 引入
```js
  import wInput from 'vanb-ui-v2'

  export default {
    components: { wInput }
  }
```

### 基本用法
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>


### 示例代码:

```vue
<w-input placeholder="测试1"></w-input>
<w-input placeholder="测试2" disabled></w-input>
<w-input placeholder="测试3" readonly />
<w-input placeholder="测试4" value="value" error="密码长度为5"></w-input>
<w-input placeholder="测试5" v-model="dbtxt"></w-input>
<p>{{dbtxt}}</p>

data(){
  return {
    dbtxt:''
  }
}
```

# API
### Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
value | 或使用v-model | String | -
error | input右侧的错误信息 | String | -

### Event
参数 | 说明 | 回调
--- | --- | ---
click | 点击按钮 | event: Event
