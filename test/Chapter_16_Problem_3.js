const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_16_Moderate/Problem_3');

describe('chapterSixteenProblemThreeBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const pointOne = 5;
        const pointTwo = 'hi';
        expect(function() {
            Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo);
        }).to.throw(Error);
    });
    it('should return {x: 2, y: 2} for lineOne = {x1: 1, y1: 1, x2: 3, y2: 3} and lineTwo = {x1: 1, y1: 3, x2: 3, y2: 1}', function() {
        const pointOne = {
            x1: 1,
            y1: 1,
            x2: 3,
            y2: 3,
        };
        const pointTwo = {
            x1: 1,
            y1: 3,
            x2: 3,
            y2: 1,
        };
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).x, 2);
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).y, 2);
    });
    it('should return {x: -2, y: 2} for lineOne = {x1: -3, y1: 3, x2: -1, y2: 1} and lineTwo = {x1: -3, y1: 1, x2: -1, y2: 3}', function() {
        const pointOne = {
            x1: -3,
            y1: 3,
            x2: -1,
            y2: 1,
        };
        const pointTwo = {
            x1: -3,
            y1: 1,
            x2: -1,
            y2: 3,
        };
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).x, -2);
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).y, 2);
    });
    it('should return {x: -2, y: -2} for lineOne = {x1: -3, y1: -1, x2: -1, y2: -3} and lineTwo = {x1: -3, y1: -3, x2: -1, y2: -1}', function() {
        const pointOne = {
            x1: -3,
            y1: -1,
            x2: -1,
            y2: -3,
        };
        const pointTwo = {
            x1: -3,
            y1: -3,
            x2: -1,
            y2: -1,
        };
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).x, -2);
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).y, -2);
    });
    it('should return {x: 2, y: -2} for lineOne = {x1: 1, y1: -1, x2: 3, y2: -3} and lineTwo = {x1: 1, y1: -3, x2: 3, y2: -1}', function() {
        const pointOne = {
            x1: 1,
            y1: -1,
            x2: 3,
            y2: -3,
        };
        const pointTwo = {
            x1: 1,
            y1: -3,
            x2: 3,
            y2: -1,
        };
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).x, 2);
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).y, -2);
    });
    it('should return {x: 0, y: 0} for lineOne = {x1: -1, y1: 1, x2: 1, y2: -1} and lineTwo = {x1: -1, y1: -1, x2: 1, y2: 1}', function() {
        const pointOne = {
            x1: -1,
            y1: 1,
            x2: 1,
            y2: -1,
        };
        const pointTwo = {
            x1: -1,
            y1: -1,
            x2: 1,
            y2: 1,
        };
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).x, 0);
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo).y, 0);
    });
    it('should return null for lineOne = {x1: 0, y1: 1, x2: 5, y2: 1} and lineTwo = {x1: 0, y1: -1, x2: 5, y2: -1}', function() {
        const pointOne = {
            x1: 0,
            y1: 1,
            x2: 5,
            y2: 1,
        };
        const pointTwo = {
            x1: 0,
            y1: -1,
            x2: 5,
            y2: -1,
        };
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo), null);
    });
    it('should return null for lineOne = {x1: 1, y1: 1, x2: 3, y2: 3} and lineTwo = {x1: 1, y1: -1, x2: 3, y2: -3}', function() {
        const pointOne = {
            x1: 1,
            y1: 1,
            x2: 3,
            y2: 3,
        };
        const pointTwo = {
            x1: 1,
            y1: -1,
            x2: 3,
            y2: -3,
        };
        assert.equal(Problem_3.chapterSixteenProblemThreeBruteForceSolution(pointOne, pointTwo), null);
    });
});
