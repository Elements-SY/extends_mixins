// mixins混入mixinObj
export const mixinObj = {
  data () {
    return {
      msg_mixins: 'mixins混入',
      msg: 'mixins混入消息'
    }
  },
  created: function () {
    console.log('混入对象的created钩子被调用')
  },
  methods: {
    clickEvent () {
      alert('from mixin')
    }
  }
}

// extends扩展extendObj
export const extendObj = {
  data () {
    return {
      msg_extend: 'extend扩展',
      msg: 'extend扩展消息'
    }
  },
  created: function () {
    console.log('extend对象的created钩子被调用')
  },
  methods: {
    clickEvent () {
      alert('from mixin')
    }
  }
}
