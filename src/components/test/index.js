function install(Vue) {
  Vue.sayHello = function() {
    console.log('hello world!');
  };
  Vue.mixin({
    created() {
      console.log('create');
    }
  });

  Vue.prototype.sayName = function() {
    console.log('my name is ltt');
  };

  Vue.directive('focus', {
    inserted(el) {
      el.focus();
    }
  });
}

export default {
  install
};
