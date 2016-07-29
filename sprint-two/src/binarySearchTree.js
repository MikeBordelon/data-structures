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
  contains: function(target) {
    var currentNode = this;
    var result = false;

    if (currentNode.value === target) {
      return true;
    }
    // check entire right side
    if (currentNode.right !== undefined) {
      result = currentNode.right.contains(target);
    }

    //  if that resurns a false check left side
    if (result === false) {
      if (currentNode.left !== undefined) {
        result = currentNode.left.contains(target);
      }
    }

    return result;

  },
  depthFirstLog: function(cb) {
    var currentnode = this;
    cb(currentnode.value);
    if (currentnode.left !== undefined) {
      currentnode.left.depthFirstLog(cb);
    }
    if (currentnode.right !== undefined) {
      currentnode.right.depthFirstLog(cb);
    }
    

  } 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
