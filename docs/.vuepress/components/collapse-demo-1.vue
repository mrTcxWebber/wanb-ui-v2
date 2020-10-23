<template>
    <div style="padding-top:20px;">
        <h3>用法</h3>
        <div class="vanb-doc-demo-block">
            <h3>collapse 折叠面板 基础用法</h3>
            <w-collapse v-model="activeNamesA" style="width:360px;">
                <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
                <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
                <w-collapse-item title="标题3" name="3" disabled>内容3</w-collapse-item>
            </w-collapse>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>collapse 折叠面板 手风琴</h3>
            <w-collapse v-model="activeNamesB" accordion style="width:360px;">
                <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
                <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
                <w-collapse-item title="标题3" name="3" disabled>内容3</w-collapse-item>
            </w-collapse>
        </div>
    </div>
</template>
<script>
    import wCollapse from '../../../src/collapse.vue'
    import wCollapseItem from "../../../src/collapse-item.vue"

    export default {
        components: {
            wCollapse,
            wCollapseItem
        },
        data() {
            return {
                activeNamesA: [],
                activeNamesB: ''
            }
        }
    }
</script>

<style>
    .vanb-doc-demo-block {
        margin: 15px;

    }

    .vanb-doc-demo-block h3 {
        margin-bottom: 10px;
    }
</style>