  

// Instantiate a new graph


var GraphNode = function(value) {
  this.value = value;

};

var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(new GraphNode(node));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var wasFound = false;
  this.nodes.forEach(function(graphNode){
    if(graphNode.value === node){
      wasFound = true;
    }
  });
  return wasFound;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //get rid of all edges from this node to other nodes
  this.edges = _.reject(this.edges,function(innerarray){
    return innerarray[0].value === node || innerarray[1].value === node;
  });
  this.nodes.splice(this.nodes.indexOf(node),1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //
  //search the edges array and find the right edge
  var result =  false;
  this.edges.forEach(function(innerarray) {
    if (innerarray[0].value === fromNode && innerarray[1].value === toNode) {
      result = true;
    }
  });
  return result;

  //search through this edges 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode = typeof fromNode === 'object' ? fromNode: this.findNode(fromNode);
  toNode = typeof toNode === 'object' ? toNode: this.findNode(toNode);

  this.edges.push([fromNode, toNode]);
  this.edges.push([toNode, fromNode]);
  //add the to
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges.forEach(function(innerarray, index, edges) {
    if (innerarray[0].value === fromNode && innerarray[1].value === toNode) {
      edges.splice(index, 1);
    }
  });

  this.edges.forEach(function(innerarray, index, edges) {
    if (innerarray[0].value === toNode && innerarray[1].value === fromNode) {
      edges.splice(index, 1);
    }
  });

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(item, index, collection){
    cb(item, index, collection);
  });
};

Graph.prototype.findNode = function(target) {
  var result = false;
  this.forEachNode(function(node) {
    if (node.value === target) {
      result = node;
    }
  });
  return result;
};


//var cb = function(a){ return a+1;}

/*
 * Complexity: What is the time complexity of the above functions?
 */


