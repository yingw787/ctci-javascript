const chai = require('chai');
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_1');

describe('chapterOneProblemOneBruteForceSolution', function() {
    it('should give correct value here', function() {
        const result = Problem_1.chapterOneProblemOneBruteForceSolution('aaa');
        assert.equal(result, false);
    });
});

describe('chapterOneProblemOneImprovedSolution', function() {
    it('should give correct value here', function() {
        const result = Problem_1.chapterOneProblemOneImprovedSolution('aaa');
        assert.equal(result, false);
    });
});
