var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objectToStore = {};
  objectToStore[k] = v;

  if (typeof this._storage.get(index) !== "object") {
    this._storage.set(index, objectToStore);
  } else {
    this._storage.each(function(item, i, storage){
      if (i === index) {
        item[k] = v;
      }
    });
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objectathashposition = this._storage.get(index);
  return objectathashposition === undefined ? undefined: objectathashposition[k];
};



HashTable.prototype.remove = function(k) {
  var k = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, index, storage) {
    if (index === k) {
      storage.splice(index, 1);
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


