const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_19 = require('../CTCI_5/Chapter_16_Moderate/Problem_19');

describe('chapterSixteenProblemNineteenBookSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const plotOfLandOne = 5.4;
        expect(function() {
            Problem_19.chapterSixteenProblemNineteenBookSolution(plotOfLandOne);
        }).to.throw(Error);
    });
    it('should return [2, 4, 1] for the following plotOfLand', function() {
        const plotOfLandOne = [
            [0, 2, 1, 0],
            [0, 1, 0, 1],
            [1, 1, 0, 1],
            [0, 1, 0, 1],
        ];
        assert.equal(JSON.stringify(Problem_19.chapterSixteenProblemNineteenBookSolution(plotOfLandOne)), JSON.stringify([2, 4, 1]));
    });
});
