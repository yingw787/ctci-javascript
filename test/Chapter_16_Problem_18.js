const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_18 = require('../CTCI_5/Chapter_16_Moderate/Problem_18');

describe('chapterSixteenProblemEighteenBookSolutionThree', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const valueOne = 5.4;
        const patternOne = 'hi';
        expect(function() {
            Problem_18.chapterSixteenProblemEighteenBookSolutionThree(valueOne, patternOne);
        }).to.throw(Error);
    });
    it('should return true for pattern length of one', function() {
        const valueTwo = 'catcatgocatgo';
        const patternTwo = 'a';
        assert.equal(Problem_18.chapterSixteenProblemEighteenBookSolutionThree(valueTwo, patternTwo), true);
    });
    it('should return true for pattern aabab and value catcatgocatgo', function() {
        const valueTwo = 'catcatgocatgo';
        const patternTwo = 'aabab';
        assert.equal(Problem_18.chapterSixteenProblemEighteenBookSolutionThree(valueTwo, patternTwo), true);
    });
    it('should return true for pattern ab and value catcatgocatgo', function() {
        const valueTwo = 'catcatgocatgo';
        const patternTwo = 'ab';
        assert.equal(Problem_18.chapterSixteenProblemEighteenBookSolutionThree(valueTwo, patternTwo), true);
    });
});
