const chai = require('chai');
const assert = chai.assert;

const Problem_4 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_4');

describe('chapterOneProblemFourBruteForceSolution', function() {
    it('should give correct value here', function() {
        const palindrome = Problem_4.chapterOneProblemFourBruteForceSolution('aba');
        assert.equal(palindrome, true);
        const notAPalindrome = Problem_4.chapterOneProblemFourBruteForceSolution('abc');
        assert.equal(notAPalindrome, false);
        const palindromeWithSpaces = Problem_4.chapterOneProblemFourBruteForceSolution('tact coa');
        assert.equal(palindromeWithSpaces, true);
    });
});
