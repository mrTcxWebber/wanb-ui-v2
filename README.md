# wanb-ui-v2 Vue UI组件库

[![Build Status](https://travis-ci.org/mrTcxWebber/wanb-ui-v2.svg?branch=master)](https://travis-ci.org/mrTcxWebber/wanb-ui-v2)

## 介绍

## 开始使用

1. 安装
`npm i -S vanb-ui-v2`

2. 前置引入
```

*, *::before, *::after {box-sizing: border-box;}
// 设置默认css变量
html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
}

// 引入 svg symbols
<script src="//at.alicdn.com/t/font_2041484_u92nujlusw.js"></script>
```

3. 在组件中引入

```
// 在main.js全局引入样式
import '../node_modules/vanb-ui-v2/dist/index.css'

// 在组件中
import { Button, ButtonGroup, Icon } from "vanb-ui-v2"

export default {
    name: 'App',
    components: {
      'w-button': Button
    }
}
```

 

## 文档

## 提问

## 变更记录

## 联系方式

## 恭喜代码

