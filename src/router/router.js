import Home from '@/views/Home.vue'
// 这里是创建路由列表的
// 这里是至上而下匹配，通用路由应该放在最后面--- 好像并不是的，放在前面也行
// 视频里面说是至上而下的。。。算了，通用的放在后面肯定没有错
export const routerMap = [
  {
    path: '/',
    alias: '/home_page', // 别名
    name: 'home',
    component: () => import('@/views/layout.vue'),
    // props: route => ({
    //   food: route.query.food
    // }),
    // beforeEnter: (to, from, next) => {
    //   // if (from.name === 'about') alert('这是从about来的')
    //   // else alert('这从其它页来的')
    //   next() // 路由独享守卫 像这种带有next的一定要执行，不然根本不能跳转
    // },
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'home_index',
        name: 'home_index',
        meta: {
          title: '首页'
        },
        component: Home
      },
      {
        path: 'table',
        name: 'tbale',
        meta: {
          title: '表格'
        },
        component: () => import('@/views/table.vue')
      },
      {
        path: 'folder_tree',
        name: 'folder_tree',
        meta: {
          title: '文件树'
        },
        component: () => import('@/views/folder-tree/folder-tree.vue')
      },
      {
        path: 'upload',
        name: 'upload',
        meta: {
          title: '文件上传'
        },
        component: () => import('@/views/upload.vue')
      },
      {
        path: 'form',
        name: 'form',
        meta: {
          title: 'form'
        },
        component: () => import('@/views/form.vue')
      },
      {
        path: 'icon_page',
        name: 'icon_page',
        meta: {
          title: '图标'
        },
        component: () => import('@/views/icon_page.vue')
      },
      {
        path: 'optimize',
        name: 'optimize',
        meta: {
          title: '数据优化'
        },
        component: () => import('@/views/optimize.vue')
      },
      {
        // 动态路由，name就是动态路由参数
        path: 'params/:id',
        name: 'params',
        meta: {
          title: '参数'
        },
        component: () => import('@/views/argu.vue'),
        props: true // 开启传值
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 这里起到的是一个懒加载的作用，只有用到它才会引用
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'bananer'
    }
  },
  {
    path: '/store',
    name: 'store',
    meta: {
      title: 'store'
    },
    component: () => import('@/views/store.vue')
  },
  {
    // 嵌套路由，应该跟ssm的control层里面的嵌套差不多
    path: '/parent',
    name: 'parent',
    meta: {
      title: 'parent'
    },
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        meta: {
          title: 'child'
        },
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    // 命名视图
    path: '/named_view',
    name: 'named_view',
    meta: {
      title: 'name_view'
    },
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      title: 'main'
    },
    redirect: to => {
      // 这里可以做逻辑处理
      console.log(to)
      return {
        name: 'home'
      }
    }
  },
  // ----- 自定义组件的视图示例 begin
  {
    path: '/count-to',
    name: 'count_to',
    meta: {
      title: 'count_to'
    },
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    meta: {
      title: '分割面板'
    },
    component: () => import('@/views/split-pane.vue')
  },
  // -------- end
  {
    path: '/render',
    name: 'render',
    meta: {
      title: 'render'
    },
    component: () => import('@/views/render.vue')
  },
  {
    path: '/menu_page',
    name: 'menu_page',
    meta: {
      title: 'menu_page'
    },
    component: () => import('@/views/menu_page.vue')
  }
]
export const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
