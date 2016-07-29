var BinarySearchTree = function(value) {
  var tree = Object.create(BSTMethods);
  tree.value = value;
  tree.left;
  tree.right;

  return tree;

};

var BSTMethods = {
  insert: function(value) {
    var currentnode = this;
    var found = false;

    if (value > currentnode.value && currentnode.right === undefined) {
      currentnode.right = BinarySearchTree(value);
      found = true;
    } else if (value < currentnode.value && currentnode.left === undefined) {
      currentnode.left = BinarySearchTree(value);
      found = true;
    }

    if (!found) {
      if (currentnode.left !== undefined) {
        currentnode.left.insert(value);
      }
      if (currentnode.right !== undefined) {
        currentnode.right.insert(value);
      }
    }

  },
  contains: function() {

  },
  depthFirstLog: function() {

  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
