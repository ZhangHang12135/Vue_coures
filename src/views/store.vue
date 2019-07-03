<template>
  <div>
    <!-- <a-input @input="handleInput"></a-input>-->
    <a-input :value="stateValue" @input="handleStateValueChange"></a-input>
    <a-input v-model="stateValue"></a-input>
    <p>{{ stateValue }} -> {{ inputValueLastLetter }}</p>
    <a-show :content="stateValue"></a-show>
    <P>appName: {{ appName }} </P>
    <p>{{ appNameWithVersion }}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <p>{{ userName }}</p>
    <button @click="handleChangeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(item, index) in todoList" :key="index">{{ item }}</p>
  </div>
</template>
<script>

import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    // ...mapState('user',{
    //   userName: state => state.userName
    // }),
    inputValueLastLetter(){
      return this.inputValue.substr(-1,1)
    },
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    // ...mapState({
    //   userName: state => state.userName
    // })
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.todo ? state.todo.todoList : []
      // stateValue: state => state.stateValue
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (val) {
        this.SET_STATE_VALUE(val)
      }
    }
    // ---------
    // ...mapState([
    //   'appName'
    // ])
    // --------
    // appName () {
    //   console.log(this)
    //   console.log(this.$store)
    //   return this.$store.state.appName
    // },
    // userName (){
    //   return this.$store.state.user.userName
    // }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput(val){
      this.inputValue = val
    },
    handleChangeAppName () {
      // this.$store.commit('SET_APP_NAME',{
      //   appName: '我是你爷爷'
      // })
      // this.SET_APP_NAME({
      //   appName: 'grandFather'
      // })
      this.updateAppName()
      this.$store.commit('SET_APP_VERSION')
    },
    handleChangeUserName () {
      // this.$store.state.user.userName = "hhhhhahahah" 错误的方法
      this.SET_USER_NAME('新的用户名')
    },
    registerModule () {
      console.log(this.$store)
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            'study mutaions',
            'study actions',
            'study states'
          ]
        }
      })
    },
    handleStateValueChange (val){
      this.SET_STATE_VALUE(val)
    }
  },
}
</script>
