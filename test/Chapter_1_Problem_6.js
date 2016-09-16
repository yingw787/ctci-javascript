const chai = require('chai');
const assert = chai.assert;

const Problem_6 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_6');

describe('chapterOneProblemSixBruteForceSolution', function() {
    it('should give correct value here', function() {
        const compressedStringOne = Problem_6.chapterOneProblemSixBruteForceSolution('aabcccccaaa');
        assert.equal(compressedStringOne, 'a2b1c5a3');
        const compressedStringTwo = Problem_6.chapterOneProblemSixBruteForceSolution('a');
        assert.equal(compressedStringTwo, 'a');
    });
});
