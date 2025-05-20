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
        text: '课后习题', items: [
          { text: '第一章', link: '/课后习题/第一章/index' },
          { text: '第三章', link: '/课后习题/第三章/index' }
        ]
      },
      { text: '电子教材', link: '/学习资源/教材/index' },
    ],

    sidebar: {
      '/课后习题/': [
        {
          text: '第一章',
          link: '/课后习题/第一章/index',
          items: [
            { text: '循环队列操作', link: '/课后习题/第一章/循环队列操作' },
            { text: '用双栈模拟队列', link: '/课后习题/第一章/用双栈模拟队列' },
            { text: '1.1节后习题', link: '/课后习题/第一章/1.1节后习题' },
            { text: '1.2课后习题', link: '/课后习题/第一章/1.2课后习题' },
            { text: '1.3节后习题', link: '/课后习题/第一章/1.3节后习题' }
          ]
        },
        {
          text: '第三章',
          link: '/课后习题/第三章/index',
          items: [
            { text: '3.1节后习题', link: '/课后习题/第三章/3.1节后习题' },
            { text: '3.2节后习题', link: '/课后习题/第三章/3.2节后习题' },
            { text: '3.3节后习题', link: '/课后习题/第三章/3.3节后习题' }
          ]
        }
      ],
      '学习资源': [
        {
          text: '学习资源',
          link: '/学习资源/index',
          items: [
            {
              text: "教材",
              link: "/学习资源/教材/index",
              items: [
                { text: "第一章", link: '/课后习题/第一章/index' },
                { text: "第二章", link: '/课后习题/第二章/index' },
                { text: "第三章", link: '/课后习题/第三章/index' },
                { text: "第四章", link: '/课后习题/第四章/index' }
              ]
            },
            {
              text: "第一章内容",
              collapsed: false,
              items: [
                { text: "数据结构-队列[知识点讲解]", link: "/学习资源/第一章/数据结构-队列[知识点讲解]" },
                { text: "5.4周日下午13点半~15点半C++队列的应用2", link: "/学习资源/第一章/5.4周日下午13点半~15点半C++队列的应用2" },
                { text: "掌握滑动窗口本质，秒杀相关题型", link: "/学习资源/第一章/掌握滑动窗口本质，秒杀相关题型" }
              ]
            },
            {
              text: "第二章内容",
              collapsed: false,
              items: [
                { text: "第四章 树和二叉树", link: "/学习资源/第二章/第四章 树和二叉树" },
                { text: "二叉树遍历秒解，前序遍历、中序遍历、后序遍历", link: "/学习资源/第二章/二叉树遍历秒解，前序遍历、中序遍历、后序遍历" },
                { text: "字典树（前缀树、Trie树）", link: "/学习资源/第二章/字典树（前缀树、Trie树）" }
              ]
            },
            {
              text: "第三章内容",
              collapsed: false,
              items: [
                { text: "【从堆的定义到优先队列、堆排序】 10分钟看懂必考的数据结构——堆", link: "/学习资源/第三章/【从堆的定义到优先队列、堆排序】 10分钟看懂必考的数据结构——堆" },
                { text: "二叉树的最近公共祖先【基础算法精讲 12】", link: "/学习资源/第三章/二叉树的最近公共祖先【基础算法精讲 12】" },
                { text: "并查集 - 基本操作, 路径压缩, 按秩合并", link: "/学习资源/第三章/并查集 - 基本操作, 路径压缩, 按秩合并" }
              ]
            },
            {
              text: "第四章内容",
              collapsed: false,
              items: [
                { text: "【算法】最短路径查找—Dijkstra算法", link: "/学习资源/第四章/【算法】最短路径查找—Dijkstra算法" },
                { text: "Bellman-Ford最短路径算法", link: "/学习资源/第四章/Bellman-Ford最短路径算法" },
                { text: "Floyd Warshall最短路径算法", link: "/学习资源/第四章/Floyd Warshall最短路径算法" }
              ]
            }
          ]
        }
      ],

    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
