<template>
  <div id="app">
    <h3>
      由此可见通过extend扩展的会被原来的覆盖，
      其原因是通过extend扩展的优先级高于mixins混入和原来的，
      mixins接收对象数组（可理解为多继承），extends接收的是对象或函数（可理解为单继承）。
    </h3>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  color: #f31919;
}
</style>
