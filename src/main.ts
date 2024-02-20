import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/index'
import service from '@/assets/service/bbs.service.js';//ts 引入js文件会报错 src下创建type.d.ts 中 实例引入


const ENV = import.meta.env;//获取生产/测试的配置
console.log('环境变量：', ENV.VITE_URL);



const app = createApp(App);
app.use(router)
app.config.globalProperties.$service = service;//声明全局变量
app.mount('#app')
