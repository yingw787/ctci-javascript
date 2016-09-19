const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_4 = require('../CTCI_5/Chapter_5_Bit_Manipulation/Problem_4');

describe('chapterFiveProblemFourBruteForceSolution', function() {
    it('should catch invalid types', function() {
        const value = 'Hello';
        expect(function() {
            Problem_4.chapterFiveProblemFourBruteForceSolution(value);
        }).to.throw(Error);
    });
    it('should catch negative integers', function() {
        const value = -1;
        expect(function() {
            Problem_4.chapterFiveProblemFourBruteForceSolution(value);
        }).to.throw(Error);
    });
    it('should catch positive real values', function() {
        const value = Math.PI;
        expect(function() {
            Problem_4.chapterFiveProblemFourBruteForceSolution(value);
        }).to.throw(Error);
    });
    it('should return [2, null] for 1', function() {
        const value = 1;
        const array = Problem_4.chapterFiveProblemFourBruteForceSolution(value);
        assert.equal(JSON.stringify(array), JSON.stringify([2, null]));
    });
    it('should return [4, 1] for 2', function() {
        const value = 2;
        const array = Problem_4.chapterFiveProblemFourBruteForceSolution(value);
        assert.equal(JSON.stringify(array), JSON.stringify([4, 1]));
    });
    it('should return [5, null] for 3', function() {
        const value = 3;
        const array = Problem_4.chapterFiveProblemFourBruteForceSolution(value);
        assert.equal(JSON.stringify(array), JSON.stringify([5, null]));
    });
    it('should return [6, 3] for 5', function() {
        const value = 5;
        const array = Problem_4.chapterFiveProblemFourBruteForceSolution(value);
        assert.equal(JSON.stringify(array), JSON.stringify([6, 3]));
    });
});
