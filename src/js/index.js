import Vue from 'vue';
import app from '../components/app.vue';
import '../components/theme-default/index.css';
import ElDialog from '../components/dialog/index';
import create from '../components/test/index';
// import aop from './AOP.js';
//
// import push from './uncurry.js';
//
// aop();
//
// const arr = [1, 2, 3];
// push(arr, 4);
// console.log(arr);
Vue.use(ElDialog);
Vue.use(create);
Vue.sayHello();
new Vue({
  el: '#app',
  components: {
    app
  }
});
