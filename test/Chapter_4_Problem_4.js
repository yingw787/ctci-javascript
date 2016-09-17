const chai = require('chai');
const assert = chai.assert;

const Problem_4 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_4');
const BinarySearchTree = require('../CTCI_5/Chapter_VII_Technical_Questions/BinarySearchTree');

describe('chapterFourProblemFourBruteForceSolution', function() {
    it('should generate three linked lists from input of this binary search tree', function() {
        const sortedArray = [50, 4, 87, 55, 90, 100];
        const binaryTree = new BinarySearchTree();
        for (let i = 0; i < sortedArray.length; i++) {
            binaryTree.insert(sortedArray[i], sortedArray[i]);
        }
        assert.equal(Problem_4.chapterFourProblemFourBruteForceSolution(binaryTree.root), false);

        const sortedArrayTwo = [50, 4, 87, 55, 90];
        const binaryTreeTwo = new BinarySearchTree();
        for (let i = 0; i < sortedArrayTwo.length; i++) {
            binaryTreeTwo.insert(sortedArrayTwo[i], sortedArrayTwo[i]);
        }
        assert.equal(Problem_4.chapterFourProblemFourBruteForceSolution(binaryTreeTwo.root), true);
    });
});
