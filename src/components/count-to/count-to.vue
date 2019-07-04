<template>
  <div>
    <slot name="left"></slot><span ref="number" :class="countClass" :id="eleId"></span><slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
import { setTimeout } from 'timers';
import './count_to.less'
export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data() {
    return {
      counter: {}
    }
  },
  props:{
    /**
     * @description 传入的样式类
     */
    className:{
      type: String,
      default: ''
    },
    /**
     * @description 起始值 start Value
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值 end Value
     */
    endVal: {
      type: Number,
      required: true //必须设置的值 must be assigned
    },
    /**
     * @description 小数点后保留位数 Number of digits after decimal point
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变动画持续时间
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速 ease animation
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否对数分组，类似1,000这种 example: 1,000 vs 1000 (true)
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号 grouping separator (',')
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数之间的符号 decimal ('.')
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * @description 动画延迟时间开始 毫秒 animation delay time && unit millisecound
     */
    delay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getCount (){
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        }, this.duration * 1000) //这里有一个不同步的问题，应该不是时间的问题 这里一直抛出的化就会有个null,窝一直点的话，动画不会按预期结束，
      })
    }
  },
  // 监听器
  watch: {
    endVal (oldVal, newVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  // 组件挂载到DOM之后触发，但是不代表渲染完成
  mounted () {
    //渲染之后触发该函数
    this.$nextTick(() => {
      this.counter =  new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping
      })
    })
    setTimeout(() => {
      this.counter.start()
      this.emitEndEvent()
    }, this.delay)
  }
}
</script>
