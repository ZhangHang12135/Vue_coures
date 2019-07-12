<template>
  <div class="box">
    <!-- <Select v-model="selevtData" style="width:200px">
      <virtual-list :size="28" :remain="6">
        <Option v-for="item in List" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </virtual-list>
    </Select> -->
    <CheckboxGroup v-model="social">
      <virtual-list :size="28" :remain="6">
      <p v-for="item in List" :key="item.value" style="height: 30px">
        <Checkbox :label="item.value">
            <Icon type="logo-twitter"></Icon>
            <span>{{ item.label }}</span>
        </Checkbox>
      </p>
      </virtual-list>
    </CheckboxGroup>
  </div>
</template>
<script>
import { doCustomTimes } from '@/lib/tools'
import VirtualList from 'vue-virtual-scroll-list'
export default {
  components: {
    VirtualList
  },
  data() {
    return {
      List: [],
      selevtData: 0,
      social: []
    }
  },
  mounted () {
    let list = []
    doCustomTimes(1000,(index) => {
      list.push({ value: index, label: `select${index}`})
    })
    this.List = list
  }
}
</script>
<style lang="less">
// .box{
//   height: 300px;
//   overflow: auto;
// }
</style>
