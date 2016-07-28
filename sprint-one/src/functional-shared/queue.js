var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};
 
  instance.firstElement = 0;

  instance.lastElement = -1;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.lastElement + 1 ] = value;
    this.lastElement++; 
  },
  dequeue: function() {
    if (this.lastElement < this.firstElement) {
      return;
    }

    var result = this.storage[this.firstElement];
    delete this.storage[this.firstElement];


    this.firstElement++;

    return result;
  },
  size: function() {
    return this.lastElement - this.firstElement + 1;
  }

};


//zeroth case
  //we enqueue
    //firstElement = 0;
    //LastElement = 0;
    //{[0:value]}

  // we dequeue
    //firstElement = 1
    //lastElement = 0; 
    //{}

  //we enqueue
    //firstElement = 1;
    //{1:value}
    //lastElement = 1;
