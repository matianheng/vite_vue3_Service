<script setup lang="ts">
import {ref,reactive,readonly,getCurrentInstance,onMounted,onBeforeMount,onUnmounted,onUpdated,onBeforeUpdate,onBeforeUnmount} from 'vue'
// 使用 ref、reactive ,readonly(只读)声明响应式变量并指定类型
const count = ref<number>(0); // 指定 number 类型
const name = ref<string>('Alice'); // 指定 string 类型
const flag = ref<boolean>(false); // 指定 boolean 类型
const flag1 = readonly<object>({}); // 指定 boolean 类型
// 使用 reactive 声明对象并指定类型
interface User {
  id: number;
  name: string;
}
const user = reactive<User>({
  id: 1,
  name: 'Alice'
});
// 创建一个响应式的字符串数组
const listResult1 = reactive<string[]>([]);
// 创建一个响应式的number类数组
const listResult2 = reactive<number[]>([]);
// 创建一个响应式的boolean类数组
const listResult3 = reactive<boolean[]>([]);
// 创建一个响应式的对象类数组
const listResult4 = reactive<object[]>([]);
const service = getCurrentInstance()?.appContext.config.globalProperties.$service;//getCurrentInstance 用于获取全局常量全局参数
const listResult= ref([]);
const  rescc = ref<string>('');
const selectFn = async () => {
  console.log(flag1,listResult1,listResult2,listResult3,listResult4);
        // 访问和修改变量值
      count.value = 10;
      name.value = 'Bob';
      user.name = 'Charlie';
      flag.value = true;  
     console.log(service);
    let bodyData = {
        pageNum:1,
        pageSize:10,
      };
     service.getVehicleExtendPage(bodyData).then((res:any) => {
        if (res.resultCode === "0000") {
            rescc.value = res.data.message;
            console.log(res.data.message) // 处理返回的数据 
            console.log(res.data.rows)
            listResult.value  = res.data.rows;
        } else {
          
        }
      });
};
//在组件挂载到 DOM 之前调用。
 onBeforeMount(() => {
  
      console.log('1 onBeforeMount');
 });
 //在组件挂载到 DOM 之后调用。
 onMounted(() => {
  
      console.log('2 mounted');
 });
 // 在数据更新但是在重新渲染之前调用。
 onBeforeUpdate(() => {
  
      console.log('Component unmounted');
  });
  //在数据更新且重新渲染之后调用。
 onUpdated(() => {
  
      console.log('Component unmounted');
  });
  //组件卸载之前
  onBeforeUnmount(() => {
  
      console.log('3 unmounted');
  });
  //组件卸载之后  
  onUnmounted(() => {
  
      console.log('Component unmounted');
  });
 
</script>

<template>

  <div class="card">
 
    <button type="button" @click="selectFn()">点击查询</button>
    {{listResult}}
    {{count}}
    {{name}}
    {{user}}
  </div>
  <div class="animation-container">
    <div class="animation-element"></div>
  </div>
</template>
 
<style scoped>
.read-the-docs {
  color: #888;
}
.animation-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animation-element {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
