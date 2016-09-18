/*
    Write an alogorithm to find the 'next' node (i.e. in order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.
*/
'use strict';

module.exports = {
    chapterFourProblemSixBruteForceSolution: (binarySearchTree, binarySearchTreeGivenNodeData) => {
        const values = [];

        function recursiveInOrderTraversal(node) {
            if (node !== null) {
                if (node.leftChild !== null) {
                    recursiveInOrderTraversal(node.leftChild);
                }

                values.push(node);

                if (node.rightChild !== null) {
                    recursiveInOrderTraversal(node.rightChild);
                }
            }
        }

        recursiveInOrderTraversal(binarySearchTree.root);

        for (let i = 0; i < values.length - 1; i++) {
            if (values[i].data === binarySearchTreeGivenNodeData) {
                return values[i + 1].data;
            }
        }
        return null;
    },
};
