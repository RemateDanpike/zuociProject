<template>
  <div id="app">
      <v-header></v-header>
      <v-nav></v-nav>
      <div class="page-wrapper">
          <router-view style="user-select: initial"></router-view>
      </div>
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
.page-wrapper{
    min-height: 500px;
    background: #e8eee4;
    width:725px;
    float: right;
    margin-top: 15px;
    border-radius: 3px;
}
</style>

