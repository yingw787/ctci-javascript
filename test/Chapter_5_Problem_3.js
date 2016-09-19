const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_5_Bit_Manipulation/Problem_3');

describe('chapterFiveProblemThreeBruteForceSolution', function() {
    it('should catch invalid types', function() {
        const value = 823194;

        expect(function() {
            Problem_3.chapterFiveProblemThreeBruteForceSolution(value);
        }).to.throw(Error);
    });
    it('should catch invalid strings', function() {
        const value = 'Hello!';

        expect(function() {
            Problem_3.chapterFiveProblemThreeBruteForceSolution(value);
        }).to.throw(Error);
    });
    it('should return 8 for 11011101111', function() {
        const value = '11011101111';
        assert.equal(Problem_3.chapterFiveProblemThreeBruteForceSolution(value), 8);
    });
    // it('should return 0.11 for 0.75', function() {
    //     const value = 0.75;
    //     assert.equal(Problem_3.chapterFiveProblemThreeBruteForceSolution(value), '0.11');
    // });
});
