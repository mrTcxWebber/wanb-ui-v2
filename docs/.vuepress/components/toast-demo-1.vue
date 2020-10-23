<template>
  <div style="padding-top: 16px;">
    <h2>简单用法 - 弹出toast</h2>
    <div class="vanb-doc-demo-block">
      <h3>Toast1</h3>
      <w-button @click="showToast1">弹出toast - top</w-button>

      <w-button @click="showToast2">弹出toast - middle</w-button>

      <w-button @click="showToast3">弹出toast - bottom</w-button>

      <w-button @click="showToast4">弹出toast - text</w-button>

      <w-button @click="showToast5">toast 倒计时</w-button>

    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import wButton from "../../../src/button.vue";
  import Toast from "../../../src/Toast.js";
  Vue.use(Toast);
  export default {
    components: {
      wButton
    },
    data() {
      return {
        tabActive: 3
      };
    },
    methods: {
      showToast1() {
        // this.$toast('<strong>加粗文字</strong>')
        this.$toast({
          message: "测试12",
          type: "loading",
          position: "top",
          // duration: 0,
          forbidClick: true,
          closeOnClick: true,
          onClose() {
            console.log("准备关闭了");
          }
        });
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
          // position: 'bottom',
          duration: 3000
          // forbidClick: true,
          // closeOnClick: true,
          // onClose(){
          //     console.log('准备关闭了3')
          // }
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
  };
</script>

<style>
  .vanb-doc-demo-block {
    margin: 15px;
  }

  .vanb-doc-demo-block h3 {
    margin-bottom: 10px;
  }
</style>