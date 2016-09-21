/*
    Given a binary tree, design an alogrithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
*/
'use strict';

const SinglyLinkedList = require('../Chapter_VII_Technical_Questions/SinglyLinkedList');
const Problem_2 = require('./Problem_2');
const assert = require('assert');

function _recursivelyMarkDepths(binaryTreeNode, depth) {
    assert(typeof binaryTreeNode === 'object');
    assert(typeof depth === 'number');

    if (!binaryTreeNode) { return; }
    binaryTreeNode.depth = depth;
    _recursivelyMarkDepths(binaryTreeNode.leftChild, depth + 1);
    _recursivelyMarkDepths(binaryTreeNode.rightChild, depth + 1);
}

function _inOrderTraversalOfNodes(binaryTreeRootNode) {
    assert(typeof binaryTreeRootNode === 'object');

    const values = [];

    function recursiveInOrderTraversal(node) {
        if (node) {
            if (node.leftChild !== null) {
                recursiveInOrderTraversal(node.leftChild);
            }
            values.push(node);
            if (node.rightChild !== null) {
                recursiveInOrderTraversal(node.rightChild);
            }
        }
    }

    recursiveInOrderTraversal(binaryTreeRootNode);
    return values;
}

// O(N * N) time, N = number of nodes
// O(N) space
// REDO
function chapterFourProblemThreeBruteForceSolution(arrayOfNumericValues) {
    assert(typeof arrayOfNumericValues === 'object');

    arrayOfNumericValues.sort(function(a, b) {
        return a - b;
    });
    const binaryTree = Problem_2.chapterFourProblemTwoBruteForceSolution(arrayOfNumericValues);
    _recursivelyMarkDepths(binaryTree.root, 0);
    const arrayOfBinaryTreeNodes = _inOrderTraversalOfNodes(binaryTree.root);

    const depthLinkedListObject = {};
    for (let i = 0; i < arrayOfBinaryTreeNodes.length; i++) {
        const currentBinaryTreeNode = arrayOfBinaryTreeNodes[i];
        const depth = currentBinaryTreeNode.depth;
        if (depthLinkedListObject[depth]) {
            const singlyLinkedList = depthLinkedListObject[depth];
            singlyLinkedList.append(currentBinaryTreeNode.key);
            depthLinkedListObject[depth] = singlyLinkedList;
        } else {
            const singlyLinkedList = new SinglyLinkedList();
            singlyLinkedList.append(currentBinaryTreeNode.key);
            depthLinkedListObject[depth] = singlyLinkedList;
        }
    }
    return depthLinkedListObject;
}

module.exports = {
    chapterFourProblemThreeBruteForceSolution: chapterFourProblemThreeBruteForceSolution,
};
