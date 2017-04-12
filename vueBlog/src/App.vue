<template>
  <div id="app">
      <v-header></v-header>
      <router-link to="/closure">理解闭包</router-link>
      <router-link to="/prototype">理解原型</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header.vue';
    export default{
        components:{
            'v-header':header
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
body{
    width: 950px;
    margin: 0 auto;
}
html{
    background: #c7cbbd;
}
</style>

