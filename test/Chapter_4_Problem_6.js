const chai = require('chai');
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_2');
const Problem_6 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_6');

describe('chapterFourProblemSixBruteForceSolution', function() {
    it('should give correct answer', function() {
        const array = [50, 4, 87, 55, 90];
        const sortedArray = array.sort(function(a, b) {
            return a - b;
        });
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(sortedArray);

        const givenNodeData = binarySearchTree.lookupIfExists(55);
        const nextNodeData = Problem_6.chapterFourProblemSixBruteForceSolution(binarySearchTree, givenNodeData);
        const testNextNodeData = 87;

        assert.equal(nextNodeData, testNextNodeData);
    });
});
