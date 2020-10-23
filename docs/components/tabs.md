---
title: Tabs 标签页
---
# 标签

### 引入
```js
import {wTabs,wTab} from 'vanb-ui-v2'


export default {
  components: {
    wTabs,
    wTab
  }
}
```

### 基本用法

<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>

### 示例代码:

```js
// 基础用法
<w-tabs style="width:360px;" v-model="tabActive" @disabled="tabsDisabled" @click="tabsClick">
  <w-tab title="标签1" index="0">内容 1</w-tab>
  <w-tab title="标签2" index="1">内容 2</w-tab>
  <w-tab title="标签3" index="2" disabled>内容 3</w-tab>
  <w-tab title="标签4" index="3">内容 4</w-tab>
  <w-tab title="标签5" index="4">内容 5</w-tab>
  <w-tab title="标签6" index="5">内容 6</w-tab>
  <w-tab title="标签7" index="6">内容 7</w-tab>
  <w-tab title="标签8" index="7">内容 8</w-tab>
  <w-tab title="标签9" index="8">内容 9</w-tab>
</w-tabs>

// tabs 切换动画
<w-tabs style="width:360px;" v-model="tabActive" animated>
    <w-tab title="标签1" index="0">内容 1</w-tab>
    <w-tab title="标签2" index="1">内容 2</w-tab>
    <w-tab title="标签3" index="2">内容 3</w-tab>
    <w-tab title="标签4" index="3">内容 4</w-tab>
</w-tabs>

data(){
  return {
      tabActive: 0
  }
},
methods: {
    tabsDisabled(index, title) {
        alert(`第${index}个被禁用了, ${title}`);
    },
    tabsClick(index, title) {
        alert(`${title} 被我点击了，是第${index}个`);
    }
}
```

# API
###  tabs Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
v-model | 绑定当前选中标签的标识符 | Number,String | -
swipeThreshold | 标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | Number,String | 5
animated | 是否开启切换标签内容时的转场动画 | Boolean | false

### tabs Event
参数 | 说明 | 回调参数
--- | --- | ---
click | 点击标签触发,回调参数为tab的index和title | index, title
disabled | 点击被禁用的标签时触发 | index, title 

###  tab Props

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
title | 标题,必填项 | String | -
index | 标识符,必须按顺序从0到N-1 | String,Number | 0
disabled | 禁用标签 | Boolean | false