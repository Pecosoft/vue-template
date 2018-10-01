import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { beforeEach, afterEach } from '@/hooks/router'
import Index from './index.vue'

Vue.use(Router)

const basePath = ''

routes.push({
  path: '/',
  name: 'Home',
  redirect: '/ModelInput'
})

routes.push({
  path: '/ModelInput',
  name: 'ModelInput',
  component: Index,
  meta: {
    title: '模型输入'
  }
})

routes.forEach(route => {
  route.path = basePath + route.path
})

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
