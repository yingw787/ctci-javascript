/*
    A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.
*/
'use strict';

const SinglyLinkedList = require('../Chapter_VII_Technical_Questions/SinglyLinkedList');
const Problem_2 = require('./Problem_2');

// NOT MY OWN FUNCTION: FROM HERE: http://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979
function _permute(permutation) {
    let length = permutation.length,
        result = new Array([0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600][length]),
        c = new Array(length).fill(0),
        i = 1,
        j = 1;

    result[0] = permutation.slice();
    while (i < length) {
        if (c[i] < i) {
            const k = (i % 2) ? c[i] : 0,
                p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result[j] = permutation.slice();
            ++j;
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

function _recursivelyMarkDepths(binarySearchTreeNode, depth) {
    if (!binarySearchTreeNode) { return; }
    binarySearchTreeNode.depth = depth;
    _recursivelyMarkDepths(binarySearchTreeNode.leftChild, depth + 1);
    _recursivelyMarkDepths(binarySearchTreeNode.rightChild, depth + 1);
}

function _inOrderTraversalOfNodes(binarySearchTreeRootNode) {
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

    recursiveInOrderTraversal(binarySearchTreeRootNode);
    return values;
}

module.exports = {
    chapterFourProblemNineBruteForceSolution: binarySearchTree => {
        // Note that adding nodes from each level doesn't matter.
        // Find all permutations of nodes at each level, append permutations to the level above.
        // e.g. [50], [4, 87], [2, 7, 55, 90] is permutationsOfArray([50]).append(permutationsOfArray([4, 87])).append(permutationsOfArray([2, 7, 55, 90])).
        _recursivelyMarkDepths(binarySearchTree.root, 0);
        const arrayOfBinaryTreeNodes = _inOrderTraversalOfNodes(binarySearchTree.root);

        const depthArrayObject = {};
        for (let i = 0; i < arrayOfBinaryTreeNodes.length; i++) {
            const currentBinaryTreeNode = arrayOfBinaryTreeNodes[i];
            const depth = currentBinaryTreeNode.depth;
            if (depthArrayObject[depth]) {
                const singlyLinkedList = depthArrayObject[depth];
                singlyLinkedList.push(currentBinaryTreeNode.key);
                depthArrayObject[depth] = singlyLinkedList;
            } else {
                const singlyLinkedList = [];
                singlyLinkedList.push(currentBinaryTreeNode.key);
                depthArrayObject[depth] = singlyLinkedList;
            }
        }

        const depths = Object.keys(depthArrayObject);
        const arrayOfPermutations = [];

        for (let i = 0; i < depths.length; i++) {
            arrayOfPermutations.push(_permute(depthArrayObject[i]));
        }

        let numberOfPermutations = 0;
        for (let i = 0; i < arrayOfPermutations.length; i++) {
            numberOfPermutations += arrayOfPermutations[i].length;
        }

        // TODO: concatenate them together and return the array of arrays.
        return numberOfPermutations;
    },
};
