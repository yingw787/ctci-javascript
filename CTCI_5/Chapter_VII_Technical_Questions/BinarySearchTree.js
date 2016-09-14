// remove and traverse code from here: https://github.com/nzakas/computer-science-in-javascript/blob/master/data-structures/binary-search-tree/binary-search-tree.js
// look at documents here: https://www.nczonline.net/blog/2009/06/16/computer-science-in-javascript-binary-search-tree-part-2/

'use strict';

const BinarySearchTreeNode = function(key, nodeData) {
    this.data = nodeData;
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(key, nodeData) {
        const toBeInsertedNode = new BinarySearchTreeNode(key, nodeData);

        function recursivelyLookForInsertSpot(currentNode, newNode) {
            if (newNode.key < currentNode.key) {
                if (currentNode.leftChild === null) {
                    currentNode.leftChild = newNode;
                } else {
                    recursivelyLookForInsertSpot(currentNode.leftChild, newNode);
                }
            } else {
                if (currentNode.rightChild === null) {
                    currentNode.rightChild = newNode;
                } else {
                    recursivelyLookForInsertSpot(currentNode.rightChild, newNode);
                }
            }
            return;
        }

        if (this.root === null) {
            this.root = toBeInsertedNode;
        } else {
            recursivelyLookForInsertSpot(this.root, toBeInsertedNode);
        }
    }
    lookupIfExists(lookupKey) {
        function recursiveLookup(currentNode, key) {
            if (currentNode.key === key) {
                return currentNode.data;
            } else if (key < currentNode.key) {
                if (currentNode.leftChild === null) {
                    return null;
                } else {
                    return recursiveLookup(currentNode.leftChild, key);
                }
            } else {
                if (currentNode.rightChild === null) {
                    return null;
                } else {
                    return recursiveLookup(currentNode.rightChild, key);
                }
            }
        }

        return recursiveLookup(this.root, lookupKey);
    }
    inOrderTraversal() {
        const values = [];

        function recursiveInOrderTraversal(node) {
            if (node) {
                if (node.leftChild !== null) {
                    recursiveInOrderTraversal(node.leftChild);
                }
                values.push(node.key);
                if (node.rightChild !== null) {
                    recursiveInOrderTraversal(node.rightChild);
                }
            }
        }

        recursiveInOrderTraversal(this.root);
        return values;
    }
    remove(key) {
        let found = false;
        let parentNode = null;
        let currentNode = this.root;

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

        let numberOfChildren = null;
        let replacementNode = null;
        let replacementParentNode = null;

        if (found) {
            numberOfChildren = (currentNode.leftChild !== null) + (currentNode.rightChild !== null);

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
                        throw new Error('Unexpected code path hit. All children should be handled within switch statement.');
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
                        throw new Error('Unexpected code path hit. All children should be handled within switch statement.');
                }
            }
        }
    }
    getRoot() {
        return this.root;
    }
}

module.exports = BinarySearchTree;
