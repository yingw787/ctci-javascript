/*
    Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
*/
'use strict';

const assert = require('assert');

function _recursiveHeight(treeNode) {
    assert(typeof treeNode === 'object');

    if (!treeNode) {
        return -1;
    }
    return Math.max(_recursiveHeight(treeNode.leftChild), _recursiveHeight(treeNode.rightChild)) + 1;
}

function _markHeights(binaryTreeRootNode) {
    assert(typeof binaryTreeRootNode === 'object');

    function recursiveInOrderTraversal(node) {
        if (node) {
            if (node.leftChild !== null) {
                recursiveInOrderTraversal(node.leftChild);
            }
            node.height = _recursiveHeight(node);
            if (node.rightChild !== null) {
                recursiveInOrderTraversal(node.rightChild);
            }
        }
    }

    recursiveInOrderTraversal(binaryTreeRootNode);
}

function _isTreeBalanced(binaryTreeRootNode) {
    assert(typeof binaryTreeRootNode === 'object');

    function recursiveInOrderTraversal(node) {
        if (node) {
            if (node.leftChild !== null) {
                recursiveInOrderTraversal(node.leftChild);
            }
            if (node.leftChild && node.rightChild) {
                if (Math.abs(node.leftChild.height - node.rightChild.height) > 1) {
                    return false;
                }
            }
            node.height = _recursiveHeight(node);
            if (node.rightChild !== null) {
                recursiveInOrderTraversal(node.rightChild);
            }
        }
        return true;
    }

    return recursiveInOrderTraversal(binaryTreeRootNode);
}

// O(N) time, N = number of nodes
// O(1) space
// REDO
function chapterFourProblemFourBruteForceSolution(rootNode) {
    assert(typeof rootNode === 'object');

    _markHeights(rootNode);
    return _isTreeBalanced(rootNode);
}

module.exports = {
    chapterFourProblemFourBruteForceSolution: chapterFourProblemFourBruteForceSolution,
};
