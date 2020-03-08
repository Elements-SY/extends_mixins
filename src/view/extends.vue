<template>
  <div class="extends">
    <h1>{{msg_extend}}</h1>
    <h1>{{msg}}</h1>
    <button @click="clickEvent">click事件</button>
  </div>
</template>
<script>
/*
由此可见通过extend扩展的会被原来的覆盖，
其原因是通过extend扩展的优先级高于mixins混入和原来的，
mixins接收对象数组（可理解为多继承），extends接收的是对象或函数（可理解为单继承）。
*/
import { mixinObj, extendObj } from '@/utils/mixins';
export default {
  name: 'extends',
  extends: extendObj,
  mixins: [mixinObj],
  data () {
    return {
      msg: '原消息'
    }
  },
  created () {
    console.log('原created钩子被调用')
  },
  mounted () { },
  methods: {
    clickEvent () {
      alert('isnt from extend')
    }
  },
}
</script>
<style lang='css' scoped>
</style>