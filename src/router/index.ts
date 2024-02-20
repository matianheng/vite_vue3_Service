import { createRouter, createWebHistory } from 'vue-router';
import  type {RouteRecordRaw} from  "vue-router"  //路由ts类型
 
const routes: Array<RouteRecordRaw> = [
  {
    path: '/HomePage',
    component: () => import('@/page/minidy/heard/index.vue')
  }
]
export const router = createRouter({
  history: createWebHistory(),//import.meta.env.BASE_URL
  routes
})

 
 
