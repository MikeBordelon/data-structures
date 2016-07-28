var Queue = function() {
  var someInstance = {};
  var count = 0;
  var firstElement = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[firstElement + count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var result = storage[firstElement];
    delete storage[firstElement];

    firstElement++; 
    if (count > 0) {
      count--;
    } 
    return result;  


  };

  someInstance.size = function() {

    return count;
  };

  return someInstance;
};

var instance = {
  0: 'test',
  1: 'test2',
  2: 'test3'
};

