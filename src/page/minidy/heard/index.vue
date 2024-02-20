<script setup lang="ts">
import { ref,getCurrentInstance,onMounted } from 'vue'

 


const rescc = ref<string>("");
const service = getCurrentInstance().appContext.config.globalProperties.$service;
const selectFn = async () => {
    console.log(service);
    let bodyData = {
        pageNum:rescc,
        pageSize:10,
      };
     service.getVehicleExtendPage(bodyData).then((res:any) => {
   
        if (res.resultCode === "0000") {
            rescc.value = res.data.message;
            console.log(res.data.message) // 处理返回的数据 
            console.log(res)
        } else {
          
        }
      });

//import axios from 'axios'
//   let headers = {
//         'brand_id': '1',
//         'content-type': 'application/json',
//         'x-app-code': 'BAEMP',
//         'Access-Control-Allow-Origin': '*',
//         'X-Requested-With': 'XMLHttpRequest'
//     }
//   axios.request({
//                 url: 'http://mpl.qa.sgmlink.com/middle_platform/web/ibuick/serviceEmp/web-api-public-vehicleExtendManage-getVehicleExtendPage',
//                 headers: headers,
//                 method: 'POST',
//                 data: {}
//             })
//             .then((res) => {

//               rescc.value = res.data.message;
//               console.log(res.data.message) // 处理返回的数据 

//             }) .catch(error => {
//           console.error(error) // 错误处理
//         });
 
};
</script>

<template>

  <div class="card">
 
    <button type="button" @click="selectFn()">点击查询</button>
    {{rescc}}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
