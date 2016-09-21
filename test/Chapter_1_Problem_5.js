const chai = require('chai');
const assert = chai.assert;

const Problem_5 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_5');

describe('chapterOneProblemFiveBruteForceSolution', function() {
    it('should return true for "pale" and "ple"', function() {
        const oneDifferentOne = Problem_5.chapterOneProblemFiveBruteForceSolution('pale', 'ple');
        assert.equal(oneDifferentOne, true);
    });
    it('should return true for "pales" and "pale"', function() {
        const oneDifferentTwo = Problem_5.chapterOneProblemFiveBruteForceSolution('pales', 'pale');
        assert.equal(oneDifferentTwo, true);
    });
    it('should return true for "pale" and "bale"', function() {
        const oneDifferentThree = Problem_5.chapterOneProblemFiveBruteForceSolution('pale', 'bale');
        assert.equal(oneDifferentThree, true);
    });
    it('should return false for "pale" and "bake"', function() {
        const twoDifferentOne = Problem_5.chapterOneProblemFiveBruteForceSolution('pale', 'bake');
        assert.equal(twoDifferentOne, false);
    });
});
