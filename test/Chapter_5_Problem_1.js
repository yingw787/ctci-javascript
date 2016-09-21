const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_5_Bit_Manipulation/Problem_1');

describe('chapterFiveProblemOneBruteForceSolution', function() {
    it('should throw error when given wrong types', function() {
        const M = 'Hello out there';
        const N = 10000000000;
        const i = 2;
        const j = 6;

        expect(function() {
            Problem_1.chapterFiveProblemOneBruteForceSolution(N, M, i, j);
        }).to.throw(Error);
    });
    it('should return correct value', function() {
        const M = '10011';
        const N = '10000000000';
        const i = 2;
        const j = 6;

        const result = Problem_1.chapterFiveProblemOneBruteForceSolution(N, M, i, j);
        assert.equal(result, '10001001100');
    });
    it('should return correct value', function() {
        const M = '10011';
        const N = '01000000000';
        const i = 3;
        const j = 7;

        const result = Problem_1.chapterFiveProblemOneBruteForceSolution(N, M, i, j);
        assert.equal(result, '01010011000');
    });
});
