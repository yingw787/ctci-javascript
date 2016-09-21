/*
    Implement a function to check if a binary tree is a binary search tree.
*/
'use strict';

const assert = require('assert');

// O(N) time, N = number of nodes;
// O(N) space
// REDO (O(N) time, O(log N) space)
function chapterFourProblemFiveBruteForceSolution(binaryTree) {
    assert(typeof binaryTree === 'object');

    const values = binaryTree.inOrderTraversal();

    for (let i = 0; i < values.length - 1; i++) {
        let currentValue = values[i];
        let nextValue = values[i + 1];
        if (currentValue > nextValue) {
            return false;
        }
    }

    return true;
}

module.exports = {
    chapterFourProblemFiveBruteForceSolution: chapterFourProblemFiveBruteForceSolution,
};
