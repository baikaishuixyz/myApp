import Vue from 'vue';
import app from '../compontens/app.vue';
import '../css/main.css';

import aop from './AOP.js';

import push from './uncurry.js';

aop();

const arr = [1, 2, 3];
push(arr, 4);
console.log(arr);
new Vue({
  el: '#app',
  components: {
    app
  }
});
