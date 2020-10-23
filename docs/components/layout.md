---
title: Layout 布局
---
# 布局
### 引入
```js
import {
    wContainer,
    wHeader,
    wFooter,
    wMain,
    wAside
} from 'vanb-ui-v2'


export default {
  components: {
    wContainer,
    wHeader,
    wFooter,
    wMain,
    wAside
  }
}
```

### 基本用法
<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

### 示例代码:

```vue
// 示例
<w-container>
    <w-header>header</w-header>
    <w-main>main</w-main>
    <w-footer>footer</w-footer>
</w-container>
// 示例
<w-container>
    <w-header>header</w-header>
    <w-container>
        <w-aside style="width:200px;">aside</w-aside>
        <w-main>main</w-main>
    </w-container>
    <w-footer>footer</w-footer>
</w-container>
// 示例
<w-container>
    <w-header>header</w-header>
    <w-container>
        <w-main>main</w-main>
        <w-aside style="width:200px;">aside</w-aside>
    </w-container>
    <w-footer>footer</w-footer>
</w-container>
// 示例
<w-container>
    <w-header>header</w-header>
    <w-aside style="width:200px;">aside</w-aside>
    <w-container>
        <w-main>main</w-main>
    </w-container>
    <w-footer>footer</w-footer>
</w-container>
```

