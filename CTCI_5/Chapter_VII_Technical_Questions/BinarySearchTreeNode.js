'use strict';

const BinarySearchTreeNode = function(key, nodeData) {
    this.data = nodeData;
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
};

module.exports = BinarySearchTreeNode;
