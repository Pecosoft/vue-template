import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import routesModelInput from 'components/ModelInput/router/routes'
import { beforeEach, afterEach } from '@/hooks/router'
import prefixRoutes from 'utils/prefixRoutes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes.concat(prefixRoutes('/customer', routesModelInput))
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
