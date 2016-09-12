'use strict';

const BSTNode = require('./BinarySearchTreeNode');
const BinarySearchTree = function() {
    this.root = null;
};

BinarySearchTree.prototype.insert = function(key, nodeData) {
    const newNode = new BSTNode(key, nodeData);
    if (this.root === null) {
        this.root = newNode;
    } else {
        insertR(this.root, newNode);
    }
};

function insertR(currentNode, newNode) {
    if (currentNode.key < newNode.key) {
        if (currentNode.leftChild === null) {
            currentNode.leftChild = newNode;
        } else {
            insertR(currentNode.leftChild, newNode);
        }
    } else {
        if (currentNode.rightChild === null) {
            currentNode.rightChild = newNode;
        } else {
            insertR(currentNode.rightChild, newNode);
        }
    }
    return;
}

BinarySearchTree.prototype.lookup = function(lookupKey) {
    return lookupR(this.root, lookupKey);
};

function lookupR(currentNode, key) {
    if (currentNode.key === key) {
        return currentNode.data;
    } else if (currentNode.key < key) {
        if (currentNode.leftChild === null) {
            return -1;
        } else {
            return lookupR(currentNode.leftChild, key);
        }
    } else {
        if (currentNode.rightChild === null) {
            return -1;
        } else {
            return lookupR(currentNode.rightChild, key);
        }
    }
}

BinarySearchTree.prototype.getRoot = function() {
    return this.root;
};

module.exports = BinarySearchTree;
