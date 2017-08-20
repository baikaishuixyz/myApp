import Vue from 'vue';
import app from '../components/app.vue';
import '../components/theme-default/index.css';
import ElDialog from '../components/dialog/index';

// import aop from './AOP.js';
//
// import push from './uncurry.js';
//
// aop();
//
// const arr = [1, 2, 3];
// push(arr, 4);
// console.log(arr);

console.log(ElDialog, Vue.prototype);
Vue.use(ElDialog);

new Vue({
  el: '#app',
  components: {
    app
  }
});
