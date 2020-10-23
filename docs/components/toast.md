---
title: Toast 弹出提示
---

# Toast

### 引入

```js
// 在main.js中
import Toast from "vanb-ui-v2"
Vue.use(Toast)

```

### 基本用法

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

### 示例代码:

```js
<w-button @click="showToast1">弹出toast - top</w-button>
<w-button @click="showToast2">弹出toast - middle</w-button>
<w-button @click="showToast3">弹出toast - bottom</w-button>
<w-button @click="showToast4">弹出toast - text</w-button>
<w-button @click="showToast5">toast 倒计时</w-button>
methods:{
  showToast1() {
      // this.$toast('测试')
      this.$toast({
          message: '测试12',
          type: 'loading',
          position: 'top',
          // duration: 0,
          forbidClick: true,
          closeOnClick: true,
          onClose() {
              console.log('准备关闭了')
          }
      })
  },
  showToast2() {
    this.$toast({
      message: "测试2222",
      type: "success",
      position: "middle",
      // duration: 0,
      forbidClick: true,
      closeOnClick: true,
      onClose() {
        console.log("准备关闭了2");
      }
    });
  },
  showToast3() {
    this.$toast("这里可以覆盖默认的", {
      message: "测试333",
      type: "html",
      position: "bottom",
      // duration: 0,
      forbidClick: true,
      // closeOnClick: true,
      onClose() {
        console.log("准关闭了3覆盖");
      }
    });
  },
  showToast4() {
    this.$toast({
      message: "测试文本",
      duration: 3000
    });
  },
  showToast5() {
    const toast = this.$toast({
      message: "倒计时 3 秒",
      duration: 0,
      forbidClick: true
    });
    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.message = `倒计时 ${second} 秒`;
      } else {
        clearInterval(timer);
        // 手动清除 Toast
        toast.isShow = false;
        toast.closeToast();
      }
    }, 1000);
  }
}
```

# API

### 使用
```js
this.$toast(message[,Options])
```

### Options

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
message | 文本内容 | String | -
type | 提示类型，可选值为 `loading,success,error,info,html`,若为`html`可把标签字符串变为实体 | String | text
position | 位置，可选值为 `top bottom` | Boolean | middle
overlay | 是否显示背景遮罩层 | Boolean | false
forbidClick | 是否禁止背景点击 | Boolean | false
duration | 默认2秒自动关闭toast | Number, String | 2000
closeOnClick | 是否点击toast后才关闭,不会自动关闭 | Boolean | false
onClose | 关闭后回调 | Function | noop






