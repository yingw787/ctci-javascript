const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_14 = require('../CTCI_5/Chapter_16_Moderate/Problem_14');

describe('chapterSixteenProblemFourteenBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayOfPointsOne = 5.4;
        expect(function() {
            Problem_14.chapterSixteenProblemFourteenBruteForceSolution(arrayOfPointsOne);
        }).to.throw(Error);

        const arrayOfPointsTwo = [
            {
                'x': 'hi',
                'y': 'I',
            },
            {
                'x': 'hi',
                'y': 'I',
            },
        ];
        expect(function() {
            Problem_14.chapterSixteenProblemFourteenBruteForceSolution(arrayOfPointsTwo);
        }).to.throw(Error);
    });
    it('should throw an error upon number of inputs less than 2', function() {
        const arrayOfPointsOne = [
            {
                'x': 3,
                'y': 4,
            },
        ];
        expect(function() {
            Problem_14.chapterSixteenProblemFourteenBruteForceSolution(arrayOfPointsOne);
        }).to.throw(Error);
    });
    it('should return the only line available', function() {
        const arrayOfPointsOne = [
            {
                'x': 3,
                'y': 4,
            },
            {
                'x': 5,
                'y': 6,
            },
        ];
        assert.equal(Problem_14.chapterSixteenProblemFourteenBruteForceSolution(arrayOfPointsOne), '{"m":1,"b":1}');
    });
    it('should return the first line given a tie between frequency in lines', function() {
        const arrayOfPointsOne = [
            {
                'x': 1,
                'y': 1,
            },
            {
                'x': 2,
                'y': 2,
            },
            {
                'x': 5,
                'y': 6,
            },
        ];
        assert.equal(Problem_14.chapterSixteenProblemFourteenBruteForceSolution(arrayOfPointsOne), '{"m":1,"b":0}');
    });
    it('should return the most frequent line given no tie in frequency', function() {
        const arrayOfPointsOne = [
            {
                'x': 1,
                'y': 1,
            },
            {
                'x': 3,
                'y': 5,
            },
            {
                'x': 4,
                'y': 6,
            },
            {
                'x': 5,
                'y': 7,
            },
        ];
        assert.equal(Problem_14.chapterSixteenProblemFourteenBruteForceSolution(arrayOfPointsOne), '{"m":1,"b":2}');
    });
});
