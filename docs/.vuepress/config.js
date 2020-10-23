const path = require('path')
module.exports = {
  base: '/wanbUI/',
  title: 'wanbUI',
  description: '适用于移动端，某些功能适用于pc端的vue2 UI组件库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' }
    ],
    sidebar: [
      {
        title: '快速使用',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
          '/components/popover',
          '/components/slides',
        ]
      },

    ]
  },
  // scss: {
  //   includePaths: [path.join(__dirname, '../../styles')]
  // }
}
