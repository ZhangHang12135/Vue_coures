<template>
  <div class="form-wrapper">
    <Button @click="handleSubmit" type="primary">提交</Button>
    <Button @click="handleReset">重置</Button>
    <!-- <form-group :list="formList" :url="url"></form-group> -->
    <form-single
      ref="formSingle"
      v-for="(item, index) in formList"
      :key="`form_${index}`"
      :config="item"
      :value-data="valueData"
      :rule-data="ruleData"
      :error-data="errorStore"
      ></form-single>
  </div>
</template>
<script>
import FormGroup from '_c/form-group'
import FormSingle from '_c/form-single'
import formData from '@/mock/response/form-data'
import clonedeep from 'clonedeep'
import { sentFormData } from '@/api/data'
export default {
  components: {
    FormGroup,
    FormSingle
  },
  data() {
    return {
      url: 'data/formData',
      formList: formData,
      initValue: {},
      valueData: {},
      ruleData: {},
      errorStore: {}
    }
  },
  methods: {
    handleSubmit () {
      // this.$refs.form.validate(valid => {
      //   if(valid){
      //     sentFormData({
      //       url: this.url,
      //       data: this.valueList
      //     }).then(res => {
      //       this.$emit('on-submit-success', res)
      //     }).catch(err => {
      //       console.log(err)
      //       this.$emit('on-submit-error', err)
      //       for(let key in err){
      //         this.errorStore[key] = err[key]
      //       }
      //     })
      //   }
      // })
      let isValid = true
      this.$refs.formSingle.forEach(item => {
        item.validate(valid => {
          if(!valid) isValid = false
        })
      })
      if(isValid){
        console.log('调接口，传数据')
        console.log(this.valueData)
      }

    },
    handleReset () {
      this.valueData = clonedeep(this.initValue)
    }
  },
  mounted () {
    let valueData = {}
    let ruleData = {}
    let errorStore = {}
    let initValue = {}
    formData.forEach(item => {
      valueData[item.name] = item.value
      ruleData[item.name] = item.rule
      initValue[item.name] = item.value
      errorStore[item.name] = ''
    })
    this.valueData = valueData
    this.ruleData = ruleData
    this.errorStore = errorStore
    this.initValue = initValue
  }
}
</script>
<style lang="less">
.form-wrapper{
  padding: 20px
}
</style>


