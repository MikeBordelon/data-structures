// var Stack = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var key = 0;

//   // Implement the methods below
//   someInstance.push = function(value) {
//     storage[key] = value;
//     key ++;
//   };

//   someInstance.pop = function() {
//     //take the last value we pushed out of storage and return it
//     //the last value is the one with the highest numerical key
//     var result = storage[key - 1 ];
//     delete storage[key - 1 ];
//     if (key > 0) { key--; }
//     return result;
//   };

//   someInstance.size = function() {
//     return key;
//   };

//   return someInstance;
// };

































var Stack = function () {
  var instance = {};
  var storage = {};
  var key = 0;

  instance.push = function(value) {
    instance[key] = value;
    key++;
  };

  instance.pop = function() {
    var result = instance[key - 1];
    delete instance[key - 1];
    if (key > 0) {
      key--;
    }
    return result;
  };

  instance.size = function(value) {
    return key;
  };
  return instance;
};

















