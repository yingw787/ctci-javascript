const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_8_Recursion_And_Dynamic_Programming/Problem_1');

describe('chapterEightProblemOneBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const n = 'hello';

        expect(function() {
            Problem_1.chapterEightProblemOneBruteForceSolution(n);
        }).to.throw(Error);
    });
    it('should throw error when given number that is not an integer', function() {
        const n = 1.5;

        expect(function() {
            Problem_1.chapterEightProblemOneBruteForceSolution(n);
        }).to.throw(Error);
    });
    it('should throw error when given number that is less than zero', function() {
        const n = -1;

        expect(function() {
            Problem_1.chapterEightProblemOneBruteForceSolution(n);
        }).to.throw(Error);
    });
    it('should return 1 when n === 0', function() {
        const n = 0;

        const result = Problem_1.chapterEightProblemOneBruteForceSolution(n);
        assert.equal(result, 1);
    });
    it('should return 4 when n === 3', function() {
        const n = 0;

        const result = Problem_1.chapterEightProblemOneBruteForceSolution(n);
        assert.equal(result, 1);
    });
});
