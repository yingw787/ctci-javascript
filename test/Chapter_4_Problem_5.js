const chai = require('chai');
const assert = chai.assert;

const Problem_5 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_5');
const BinaryTree = require('../CTCI_5/Chapter_VII_Technical_Questions/BinaryTree');

describe('chapterFourProblemFiveBruteForceSolution', function() {
    it('should return false since the tree is not a binary search tree.', function() {
        const sortedArray = [50, 4, 87, 55, 90, 100];
        const binaryTree = new BinaryTree();
        for (let i = 0; i < sortedArray.length; i++) {
            binaryTree.insert(sortedArray[i], sortedArray[i]);
        }
        assert.equal(Problem_5.chapterFourProblemFiveBruteForceSolution(binaryTree), false);
    });
});
