/*
    Implement a function to check if a binary tree is a binary search tree.
*/
'use strict';

module.exports = {
    chapterFourProblemFiveBruteForceSolution: binaryTree => {
        const values = binaryTree.inOrderTraversal();

        for (let i = 0; i < values.length - 1; i++) {
            let currentValue = values[i];
            let nextValue = values[i + 1];
            if (currentValue > nextValue) {
                return false;
            }
        }

        return true;
    },
};
