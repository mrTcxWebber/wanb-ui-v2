<template>
    <div>
        <h3>用法</h3>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-main>main</w-main>
                <w-footer>footer</w-footer>
            </w-container>

        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-container>
                    <w-aside style="width:200px;">aside</w-aside>
                    <w-main>main</w-main>
                </w-container>
                <w-footer>footer</w-footer>
            </w-container>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-container>
                    <w-main>main</w-main>
                    <w-aside style="width:200px;">aside</w-aside>
                </w-container>
                <w-footer>footer</w-footer>
            </w-container>

        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-aside style="width:200px;">aside</w-aside>
                <w-container>
                    <w-main>main</w-main>
                </w-container>
                <w-footer>footer</w-footer>
            </w-container>

        </div>
    </div>
</template>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .vanb-doc-demo-block {
        margin: 15px;

    }

    .vanb-doc-demo-block h3 {
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

<script>
    import wContainer from "../../../src/container.vue";
    import wHeader from "../../../src/header.vue";
    import wFooter from "../../../src/footer.vue";
    import wMain from "../../../src/main.vue";
    import wAside from "../../../src/aside.vue";

    export default {
        components: {
            wContainer,
            wHeader,
            wFooter,
            wMain,
            wAside
        },
        data() {
            return {};
        }
    };
</script>