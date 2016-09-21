/*
    Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
*/
'use strict';

const BinarySearchTree = require('../Chapter_VII_Technical_Questions/BinarySearchTree');
const assert = require('assert');

function _recursivelyBuildSubTreeFromSortedArray(sortedSubArray, binarySearchTree) {
    assert(typeof sortedSubArray === 'object');
    assert(typeof binarySearchTree === 'object');

    if (sortedSubArray.length === 0) {
        return;
    }

    const rootIndex = Math.floor(sortedSubArray.length / 2);

    const leftSubArray = sortedSubArray.slice(0, rootIndex);
    const rightSubArray = sortedSubArray.slice(rootIndex + 1, sortedSubArray.length);

    binarySearchTree.insert(sortedSubArray[rootIndex], sortedSubArray[rootIndex]);
    _recursivelyBuildSubTreeFromSortedArray(leftSubArray, binarySearchTree);
    _recursivelyBuildSubTreeFromSortedArray(rightSubArray, binarySearchTree);
}

// O(N) time
// O(N) space
// CORRECT NO REDO
function chapterFourProblemTwoBruteForceSolution(sortedArray) {
    assert(typeof sortedArray === 'object');

    const tree = new BinarySearchTree();

    _recursivelyBuildSubTreeFromSortedArray(sortedArray, tree);

    return tree;
}

module.exports = {
    chapterFourProblemTwoBruteForceSolution: chapterFourProblemTwoBruteForceSolution,
};
