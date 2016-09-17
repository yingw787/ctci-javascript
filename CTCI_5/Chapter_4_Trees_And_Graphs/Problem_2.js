/*
    Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
*/
'use strict';

const BinarySearchTree = require('../Chapter_VII_Technical_Questions/BinarySearchTree');

function _recursivelyBuildSubTree(sortedSubArray, binarySearchTree) {
    if (sortedSubArray.length === 0) {
        return;
    }

    const rootIndex = Math.floor(sortedSubArray.length / 2);

    const leftSubArray = sortedSubArray.slice(0, rootIndex);
    const rightSubArray = sortedSubArray.slice(rootIndex + 1, sortedSubArray.length);

    binarySearchTree.insert(sortedSubArray[rootIndex]);
    _recursivelyBuildSubTree(leftSubArray, binarySearchTree);
    _recursivelyBuildSubTree(rightSubArray, binarySearchTree);
}

module.exports = {
    chapterFourProblemTwoBruteForceSolution: sortedArray => {
        const tree = new BinarySearchTree();

        _recursivelyBuildSubTree(sortedArray, tree);

        return tree;
    },
};
