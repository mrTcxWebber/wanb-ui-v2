<template>
<div style="padding-top: 16px;">
    <h2>简单用法</h2>

    <div class="vanb-doc-demo-block">
        <h3>tabs</h3>
        <w-tabs style="width:360px;" v-model="tabActive">
            <w-tab title="标签1" index="0">内容 1</w-tab>
            <w-tab title="标签2" index="1">内容 2</w-tab>
            <w-tab title="标签3" index="2">内容 3</w-tab>
            <w-tab title="标签4" index="3">内容 4</w-tab>
        </w-tabs>
    </div>
    <div class="vanb-doc-demo-block">
        <h3>tabs 标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。</h3>
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
    </div>
    <div class="vanb-doc-demo-block">
        <h3>tabs 切换动画</h3>
        <w-tabs style="width:360px;" v-model="tabActive" animated>
            <w-tab title="标签1" index="0">内容 1</w-tab>
            <w-tab title="标签2" index="1">内容 2</w-tab>
            <w-tab title="标签3" index="2">内容 3</w-tab>
            <w-tab title="标签4" index="3">内容 4</w-tab>
        </w-tabs>
    </div>
</div>
</template>

<script>
import wTabs from "../../../src/tabs.vue";
import wTab from "../../../src/tab.vue";

export default {
    components: {
        wTabs,
        wTab
    },
    data() {
        return {
            tabActive: 0
        };
    },
    methods: {
        tabsDisabled(index, title) {
            alert(`第${index}个被禁用了, ${title}`);
        },
        tabsClick(index, title) {
            alert(`${title} 被我点击了，是第${index}个`);
        }
    }
};
</script>

<style>
.vanb-doc-demo-block {
    margin: 15px;
}

.vanb-doc-demo-block h3 {
    font-size: 1rem;
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
