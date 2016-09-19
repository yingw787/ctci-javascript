const chai = require('chai');
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_2');
const Problem_8 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_8');

describe('chapterFourProblemSevenBruteForceSolution', function() {
    it('should give correct answer here', function() {
        const sortedArray = [2, 4, 7, 50, 55, 87, 90];
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(sortedArray);
        const nodeOne = binarySearchTree.lookupNodeIfExists(4);
        const nodeTwo = binarySearchTree.lookupNodeIfExists(55);

        const firstCommonAncestorNode = Problem_8.chapterFourProblemEightBruteForceSolution(binarySearchTree, nodeOne, nodeTwo);
        assert.equal(firstCommonAncestorNode, 50);
    });
    it('should give correct answer here', function() {
        const sortedArray = [2, 4, 7, 50, 55, 87, 90];
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(sortedArray);
        const nodeOne = binarySearchTree.lookupNodeIfExists(2);
        const nodeTwo = binarySearchTree.lookupNodeIfExists(7);

        const firstCommonAncestorNode = Problem_8.chapterFourProblemEightBruteForceSolution(binarySearchTree, nodeOne, nodeTwo);
        assert.equal(firstCommonAncestorNode, 4);
    });
    it('should give correct answer here', function() {
        const sortedArray = [2, 4, 7, 50, 55, 87, 90];
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(sortedArray);
        const nodeOne = binarySearchTree.lookupNodeIfExists(55);
        const nodeTwo = binarySearchTree.lookupNodeIfExists(90);

        const firstCommonAncestorNode = Problem_8.chapterFourProblemEightBruteForceSolution(binarySearchTree, nodeOne, nodeTwo);
        assert.equal(firstCommonAncestorNode, 87);
    });
});
