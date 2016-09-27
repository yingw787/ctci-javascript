const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_8_Recursion_And_Dynamic_Programming/Problem_2');

describe('chapterEightProblemTwoBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const grid = 5;
        const offLimitsCells = ['X'];

        expect(function() {
            Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        }).to.throw(Error);
    });
    it('should throw error when given empty grid', function() {
        const grid = [];
        const offLimitsCells = ['X'];

        expect(function() {
            Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        }).to.throw(Error);

        const otherGrid = [[]];
        expect(function() {
            Problem_2.chapterEightProblemTwoBruteForceSolution(otherGrid, offLimitsCells);
        }).to.throw(Error);
    });
    it('should return a viable path when possible', function() {
        const grid = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
        ];
        const offLimitsCells = ['X'];

        const result = Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        assert.equal(result !== null, true);
    });
    it('should return a viable path even when difficult', function() {
        const grid = [
            ['1', 'X', 'X'],
            ['4', '5', '6'],
            ['X', 'X', '9'],
        ];
        const offLimitsCells = ['X'];

        const result = Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        assert.equal(result !== null, true);
    });
    it('should return a viable path for a 1x3 grid', function() {
        const grid = [
            ['1', '2', '3'],
        ];
        const offLimitsCells = ['X'];

        const result = Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        assert.equal(result !== null, true);
    });
    it('should return a viable path for a 3x1 grid', function() {
        const grid = [
            ['1'],
            ['2'],
            ['3'],
        ];
        const offLimitsCells = ['X'];

        const result = Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        assert.equal(result !== null, true);
    });
    it('should return a viable path for 1x1 grid', function() {
        const grid = [
            ['1'],
        ];
        const offLimitsCells = ['X'];

        const result = Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        assert.equal(result !== null, true);
    });
    it('should return null for a 1x3 grid that has an "X" in it', function() {
        const grid = [
            ['1'],
            ['X'],
            ['3'],
        ];
        const offLimitsCells = ['X'];

        const result = Problem_2.chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells);
        assert.equal(result === null, true);
    });
});
