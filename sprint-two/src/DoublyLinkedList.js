var DoublyLinkedListNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};


var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    if (this.head === null) {
      this.head = DoublyLinkedListNode(value);
      this.tail = this.head;
    } else {
      this.tail.next = DoublyLinkedListNode(value);
      this.tail.next.previous = this.tail;
      this.tail = this.tail.next;
    }

  };

  list.removeHead = function() {
    var value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.previous = null;
      this.head = this.head.next;
    }
    return value;
  };

  list.contains = function(target) {
    var currentnode = this.head;
    while (currentnode.next !== null) {
      if (currentnode.value === target) { return true; }
      currentnode = currentnode.next;
    }
    return currentnode.value === target ? true : false;

  };

  return list;
};