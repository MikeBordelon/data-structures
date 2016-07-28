var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstElement = 0;
  this.lastElement = -1;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.lastElement +1] = value;
  this.lastElement++;
};

Queue.prototype.dequeue = function(){
  if(this.lastElement >= this.firstElement){
    var result = this.storage[this.firstElement];
    delete this.storage[this.firstElement];
    this.firstElement ++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.lastElement-this.firstElement + 1;
};
