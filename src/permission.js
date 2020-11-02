import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // 白名单

router.beforeEach(async (to, from, next) => {
  // start progress bar
  // NProgress.start()

  // 设置页面的title
  document.title = getPageTitle(to.meta.title)

  // 确定用户是否已登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，则重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      //确定用户是否通过getInfo获取了权限角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // 角色必须是对象数组，例如: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch('user/getInfo')

          // 根据角色生成可访问路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // 动态添加可访问路由
          router.addRoutes(accessRoutes)

          // 确保addRoutes完整的hack方法
          // 设置replace:true，这样导航就不会留下历史记录
          next({ ...to, replace: true })
        } catch (error) {
          // 删除token 并转到登录页面重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          // NProgress.done()
        }
      }
    }
  } else {
    //在没有token的时候，如果在白名单中，则直接进入，其他没有访问权限的页面将被重定向到登录页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      // NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
