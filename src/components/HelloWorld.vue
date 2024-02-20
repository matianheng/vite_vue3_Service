<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const count = ref(0);


const rescc = ref<string>("");
const selectFn = async () => {
  let headers = {
        'brand_id': '1',
        'content-type': 'application/json',
        'x-app-code': 'BAEMP',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
    }
  axios.request({
                url: 'http://mpl.qa.sgmlink.com/middle_platform/web/ibuick/serviceEmp/web-api-public-vehicleExtendManage-getVehicleExtendPage',
                headers: headers,
                method: 'POST',
                data: {}
            })
            .then((res) => {

              rescc.value = res.data.message;
              console.log(res.data.message) // 处理返回的数据 

            }) .catch(error => {
          console.error(error) // 错误处理
        });
 
};
</script>

<template>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="selectFn()">点击查询1</button>
    {{rescc}}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
