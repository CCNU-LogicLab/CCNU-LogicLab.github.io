import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "LogicLab",
  description: "LogicLab",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '精选题库', link: '/精选题库/index' },
      { text: '竞赛资讯', link: '/竞赛资讯/index' },
      { text: '学习资源', link: '/学习资源/index' },
      { text: '课后习题', link: '/课后习题/index' }
    ],

    sidebar: {
      '学习资源': [
        {
          text: '学习资源',
          link: '/学习资源/index',
          items: [{
            text: "数据结构-队列[知识点讲解]",
            link: "/学习资源/数据结构-队列[知识点讲解]"
          }]
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
