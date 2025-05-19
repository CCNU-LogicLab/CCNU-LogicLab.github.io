import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "LogicLab",
  description: "LogicLab",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '精选题库', link: '/精选题库/index' },
      { text: '竞赛资讯', link: '/竞赛资讯/index' },
      { text: '学习资源', link: '/学习资源/index' },
      {
        text: '课后习题', link: '/课后习题/index',
        // items: [
        //   { text: "第一章", link: '/课后习题/第一章/index', },
        //   { text: "第二章", link: '/课后习题/第二章/index', },
        //   { text: "第三章", link: '/课后习题/第三章/index', },
        //   { text: "第四章", link: '/课后习题/第四章/index', },
        // ]
      },
      { text: '电子教材', link: '/学习资源/教材/index' },
    ],

    sidebar: {
      '学习资源': [
        {
          text: '学习资源',
          link: '/学习资源/教材/index',
          items: [{
            text: "教材",
            link: "/学习资源/教材/index",
            items: [
              { text: "第一章", link: '/课后习题/第一章/index', },
              { text: "第二章", link: '/课后习题/第二章/index', },
              { text: "第三章", link: '/课后习题/第三章/index', },
              { text: "第四章", link: '/课后习题/第四章/index', },
            ]
          }, {
            text: "数据结构-队列[知识点讲解]",
            link: "/学习资源/数据结构-队列[知识点讲解]"
          }, {
            text: "5.4周日下午13点半~15点半C++队列的应用2",
            link: "/学习资源/5.4周日下午13点半~15点半C++队列的应用2"
          }, {
            text: "掌握滑动窗口本质，秒杀相关题型",
            link: "/学习资源/掌握滑动窗口本质，秒杀相关题型"
          }, {
            text: "第四章 树和二叉树",
            link: "/学习资源/第四章 树和二叉树"
          }, {
            text: "二叉树遍历秒解，前序遍历、中序遍历、后序遍历",
            link: "/学习资源/二叉树遍历秒解，前序遍历、中序遍历、后序遍历"
          }, {
            text: "字典树（前缀树、Trie树）",
            link: "/学习资源/字典树（前缀树、Trie树）"
          },

          ]
        }
      ],
      '课后习题': [{
        text: '课后习题',
        link: '/课后习题/index',
        collapsed: false,
        items: [
          {
            text: '第一章',
            link: '/课后习题/第一章/index',
            items: [
              { text: '循环队列操作', link: '/课后习题/第一章/循环队列操作' },
              { text: '用双栈模拟队列', link: '/课后习题/第一章/用双栈模拟队列' },
            ]
          },
          {
            text: '第二章', link: '/课后习题/第一章/index',
            items: [
              { text: '循环队列操作', link: '/课后习题/第一章/循环队列操作' },
              { text: '用双栈模拟队列', link: '/课后习题/第一章/用双栈模拟队列' },
            ]
          }, {
            text: '第三章', link: '/课后习题/第一章/index',
            items: [
              { text: '循环队列操作', link: '/课后习题/第一章/循环队列操作' },
              { text: '用双栈模拟队列', link: '/课后习题/第一章/用双栈模拟队列' },
            ]
          }, {
            text: '第四章', link: '/课后习题/第一章/index',
            items: [
              { text: '循环队列操作', link: '/课后习题/第一章/循环队列操作' },
              { text: '用双栈模拟队列', link: '/课后习题/第一章/用双栈模拟队列' },
            ]
          },
        ]
      }]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
