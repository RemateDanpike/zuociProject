// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import prototypeClosure1 from './components/prototypeClouse1.vue';
import prototypeClosure2 from './components/prototypeClouse2.vue';
import zxsxw1 from './components/zxsxw1.vue';
import zxsxw2 from './components/zxsxw2.vue';
import This from './components/This.vue';
import Flex from './components/flex.vue';
import boxsizing from './components/boxsizing.vue';

document.body.style.webkitUserSelect='none';
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
var routes = [
    {path:'/prototypeClosure1',component:prototypeClosure1},
    {path:'/prototypeClosure2',component:prototypeClosure2},
    {path:'/zxsxw1',component:zxsxw1},
    {path:'/zxsxw2',component:zxsxw2},
    {path:'/this',component:This},
    {path:'/flex',component:Flex},
    {path:'/boxsizing',component:boxsizing},
];
var router = new VueRouter({
    routes,
    linkActiveClass:'active'//配置激活状态是的class
});
var app = Vue.extend(App);
new app({
    router
}).$mount('#app');

// router.push('/flex');  //默认跳转tab


