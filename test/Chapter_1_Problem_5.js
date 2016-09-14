const chai = require('chai');
const assert = chai.assert;

const Problem_5 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_5');

describe('chapterOneProblemFiveBruteForceSolution', function() {
    it('should give correct value here', function() {
        const oneDifferentOne = Problem_5.chapterOneProblemFiveBruteForceSolution('pale', 'ple');
        assert.equal(oneDifferentOne, true);
        const oneDifferentTwo = Problem_5.chapterOneProblemFiveBruteForceSolution('pales', 'pale');
        assert.equal(oneDifferentTwo, true);
        const oneDifferentThree = Problem_5.chapterOneProblemFiveBruteForceSolution('pale', 'bale');
        assert.equal(oneDifferentThree, true);
        const twoDifferentOne = Problem_5.chapterOneProblemFiveBruteForceSolution('pale', 'bake');
        assert.equal(twoDifferentOne, false);
    });
});
