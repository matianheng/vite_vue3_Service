import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite';    //自动引入api $ npm install -D unplugin-vue-components unplugin-auto-import
import Components from 'unplugin-vue-components/vite';  //按需自动引入组件
import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import  path  from "path"; // 引入方法


export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', {
        from: 'vue-router',
        imports: ['RouteLocationRaw',],
        type: true,
      },],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    },
  },
  server: {
    port:2023,  //端口号
    host:true,  //可以设置固定的值或者是布尔值, 设置后,才会有NetWork
    open:true,  //运行自动打开浏览器
    // 配置反向代理，解决跨域
    proxy: {
 
      '/middle_platform': {
        target: 'http://mpl.qa.sgmlink.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/middle_platform/, '')
      }
    },
 
  },
  css: {
    // css预处理器 配置一个入口, 其余css引入入口文件, css变量可全局使用
    preprocessorOptions: {
      scss: {
        // 引入 index.scss 这样就可以在全局中使用 index.scss中预定义的变量了,这里我是用的是sass
        // 给导入的路径最后加上 ; 
        additionalData: '@import "@/assets/style/index.scss";'   //入口文件地址
      }
    }
  },
})
 //使用:
//在此处配置element plus后, 可以直接使用,仁和地方都不用再引入,自动按需引入的,在components.d.ts中可以看到生成文件
//import {ref} from  "vue"这种引入也可省略, 直接使用即可, 具体引入的类型在src/auto-imports.d.ts文件中可见
//注意:修改vite.config.ts文件后需要重启