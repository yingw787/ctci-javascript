'use strict';

const BinaryTreeNode = function(key, nodeData) {
    this.data = nodeData;
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
};

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(key, nodeData) {
        const newBinaryTreeNode = new BinaryTreeNode(key, nodeData);

        // TODO: Not entirely sure how to create balanced insert function for binary tree
        function _recursivelyFindInsertSpot(currentNode, newNode) {
            if (!currentNode) {
                currentNode = newNode;
            } else {
                if (!currentNode.leftChild) {
                    currentNode.leftChild = newNode;
                } else if (!currentNode.rightChild) {
                    currentNode.rightChild = newNode;
                } else {
                    _recursivelyFindInsertSpot(currentNode.leftChild, newNode);
                }
            }
        }

        if (!this.root) {
            this.root = newBinaryTreeNode;
        } else {
            _recursivelyFindInsertSpot(this.root, newBinaryTreeNode);
        }
    }
    inOrderTraversal() {
        const values = [];

        function recursiveInOrderTraversal(node) {
            if (node) {
                if (node.leftChild) {
                    recursiveInOrderTraversal(node.leftChild);
                }
                values.push(node.key);
                if (node.rightChild) {
                    recursiveInOrderTraversal(node.rightChild);
                }
            }
        }

        recursiveInOrderTraversal(this.root);
        return values;
    }
}

module.exports = BinaryTree;
