
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
      list.head.next = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var value = list.head['value'];
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {
    var contained = false;
    var currentNode = list.head;

    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        contained = true;
      }
      currentNode = currentNode.next;
    }
    return currentNode.value === target ? true : contained;

  };

  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
