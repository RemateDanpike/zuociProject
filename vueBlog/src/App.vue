<template>
  <div id="app">
      <v-header></v-header>
      <v-nav></v-nav>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header.vue';
    import nav from './components/nav.vue';
    export default{
        components:{
            'v-header':header,
            'v-nav':nav
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

