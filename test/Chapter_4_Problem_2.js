const chai = require('chai');
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_2');

describe('chapterFourProblemTwoBruteForceSolution', function() {
    it('should be able to handle empty array', function() {
        const emptyArray = [];
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(emptyArray);
        assert.equal(JSON.stringify(binarySearchTree.inOrderTraversal()), JSON.stringify(emptyArray));
    });
    it('should be able to handle array with one value', function() {
        const arrayWithOneValue = [5];
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(arrayWithOneValue);
        assert.equal(JSON.stringify(binarySearchTree.inOrderTraversal()), JSON.stringify(arrayWithOneValue));
    });
    it('should be able to generate the same array as input from binary search tree', function() {
        const sortedArray = [2, 4, 7, 50, 55, 87, 90];
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(sortedArray);
        assert.equal(JSON.stringify(binarySearchTree.inOrderTraversal()), JSON.stringify(sortedArray));
    });
});
