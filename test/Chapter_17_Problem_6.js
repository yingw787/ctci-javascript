const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_6 = require('../CTCI_5/Chapter_17_Hard/Problem_6');

describe('chapterSeventeenProblemSixBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const n_1 = 'hi';
        expect(function() {
            Problem_6.chapterSeventeenProblemSixBruteForceSolution(n_1);
        }).to.throw(Error);
    });
    it('should return 9 for n = 25', function() {
        const n_1 = 25;
        assert.equal(Problem_6.chapterSeventeenProblemSixBruteForceSolution(n_1), 9);
    });
    it('should return 10 for n = 26', function() {
        const n_1 = 26;
        assert.equal(Problem_6.chapterSeventeenProblemSixBruteForceSolution(n_1), 10);
    });
});
