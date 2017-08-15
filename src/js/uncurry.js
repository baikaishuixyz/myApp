Function.prototype.uncurry = function() {
  const self = this;
  return function() {
    const arg = Array.prototype.shift.call(arguments);
    return self.apply(arg, arguments);
  };
};

const push = Array.prototype.push.uncurry();

export default push;
