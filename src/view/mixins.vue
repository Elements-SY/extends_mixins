<template>
  <div class="index">
    <h1>{{msg_mixins}}</h1>
    <h1>{{msg}}</h1>
    <button @click="clickEvent">click事件</button>
    <router-link to="/extends">进入查看extends扩展用法与mixins混入的区别</router-link>
  </div>
</template>
<script>
/*
由此可见通过mixins混入的会被原来的覆盖，
其原因是通过mixins混入的优先级高于原来的，
*/
import { mixinObj } from '@/utils/mixins';
export default {
  name: 'index',
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
      alert('isnt from mixin')
    }
  },
}
</script>
<style lang='css' scoped>
</style>