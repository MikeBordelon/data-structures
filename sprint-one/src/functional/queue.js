var Queue = function() {
  var someInstance = {};
  var count = 0;
  var firstElement = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    var result = storage[firstElement];
    delete storage[firstElement];
    console.log(storage);

    if (count > 0) {
      count--;
    } 
    if(count>1){firstElement++; }
    console.log(firstElement);
    return result;  


  };

  someInstance.size = function() {

    return count;
  };

  return someInstance;
};
