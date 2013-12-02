function mixin(target) {
  var store = Object.create(null);

  target.get = function(key) {
    return store[key];
  };

  target.set = function(key, value) {
    store[key] = value;
    return this;
  };
}

module.exports = mixin;
