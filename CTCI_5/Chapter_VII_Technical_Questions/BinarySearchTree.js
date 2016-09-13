// remove and traverse code from here: https://github.com/nzakas/computer-science-in-javascript/blob/master/data-structures/binary-search-tree/binary-search-tree.js
// look at documents here: https://www.nczonline.net/blog/2009/06/16/computer-science-in-javascript-binary-search-tree-part-2/

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
    if (newNode.key < currentNode.key) {
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
    } else if (key < currentNode.key) {
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

BinarySearchTree.prototype.traverse = function() {
    let values = [];

    function inOrderTraversal(node) {
        if (node) {
            if (node.leftChild !== null) {
                inOrderTraversal(node.leftChild);
            }
            values.push(node.key);
            if (node.rightChild !== null) {
                inOrderTraversal(node.rightChild);
            }
        }
    }

    inOrderTraversal(this.root);
    return values;
};

BinarySearchTree.prototype.remove = function(key) {
    let found = false;
    let parentNode = null;
    let currentNode = this.root;
    let numberOfChildren = null;
    let replacementNode = null;
    let replacementParentNode = null;

    while (!found && currentNode) {
        if (key < currentNode.key) {
            parentNode = currentNode;
            currentNode = currentNode.leftChild;
        } else if (key > currentNode.key) {
            parentNode = currentNode;
            currentNode = currentNode.rightChild;
        } else {
            found = true;
        }
    }

    if (found) {
        numberOfChildren = (currentNode.leftChild !== null ? 1 : 0) + (currentNode.rightChild !== null ? 1 : 0);

        if (currentNode === this.root) {
            switch (numberOfChildren) {
                case 0:
                    this.root = null;
                    break;
                case 1:
                    this.root = (currentNode.rightChild === null ? currentNode.leftChild : currentNode.rightChild);
                    break;
                case 2:
                    replacementNode = this.root.leftChild;

                    while (replacementNode.rightChild !== null) {
                        replacementParentNode = replacementNode;
                        replacementNode = replacementNode.rightChild;
                    }

                    if (replacementParentNode !== null) {
                        replacementParentNode.rightChild = replacementNode.leftChild;
                        replacementNode.rightChild = this.root.rightChild;
                        replacementNode.leftChild = this.root.leftChild;
                    } else {
                        replacementNode.rightChild = this.root.rightChild;
                    }

                    this.root = replacementNode;
                    break;
                default:
                    throw new Error('unhandled error');
            }
        } else {
            switch (numberOfChildren) {
                case 0:
                    if (currentNode.key < parentNode.key) {
                        parentNode.leftChild = null;
                    } else {
                        parentNode.rightChild = null;
                    }
                    break;
                case 1:
                    if (currentNode.key < parentNode.key) {
                        parentNode.leftChild = (currentNode.leftChild === null ? currentNode.rightChild : currentNode.leftChild);
                    } else {
                        parentNode.rightChild = (currentNode.leftChild === null ? currentNode.rightChild : currentNode.leftChild);
                    }
                    break;
                case 2:
                    replacementNode = currentNode.leftChild;
                    replacementParentNode = currentNode;

                    while (replacementNode.rightChild !== null) {
                        replacementParentNode = replacementNode;
                        replacementNode = replacementNode.rightChild;
                    }

                    replacementParentNode.rightChild = replacementNode.leftChild;

                    replacementNode.rightChild = currentNode.rightChild;
                    replacementNode.leftChild = currentNode.leftChild;

                    if (currentNode.key < parentNode.key) {
                        parentNode.leftChild = replacementNode;
                    } else {
                        parentNode.rightChild = replacementNode;
                    }
                    break;
                default:
                    throw new Error('unhandled error');
            }
        }
    }
};

BinarySearchTree.prototype.getRoot = function() {
    return this.root;
};

module.exports = BinarySearchTree;
