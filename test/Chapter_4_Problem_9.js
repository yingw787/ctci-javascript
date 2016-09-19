const chai = require('chai');
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_2');
const Problem_9 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_9');

function _factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * _factorial(n - 1);
}

describe('chapterFourProblemNineBruteForceSolution', function() {
    it('should give correct answer here', function() {
        const sortedArray = [2, 4, 7, 50, 55, 87, 90];
        const binarySearchTree = Problem_2.chapterFourProblemTwoBruteForceSolution(sortedArray);

        const numberOfPermutations = Problem_9.chapterFourProblemNineBruteForceSolution(binarySearchTree);
        assert.equal(numberOfPermutations, _factorial(1) + _factorial(2) + _factorial(4));
    });
});
