var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};
 
  instance.firstElement = 0;

  instance.lastElement = 0;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[] = 
  },
  dequeue: function() {},
  size: function() {},

};


