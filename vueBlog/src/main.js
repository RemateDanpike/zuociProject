// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Closure from './components/closure.vue';
import Prototype from './components/prototype.vue';


/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
var routes = [
    {path:'/closure',component:Closure},
    {path:'/prototype',component:Prototype}
];
var router = new VueRouter({
    routes,
    linkActiveClass:'active'//配置激活状态是的class
});
var app = Vue.extend(App);
new app({
    router
}).$mount('#app');


