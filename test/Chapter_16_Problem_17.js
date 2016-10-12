const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_17 = require('../CTCI_5/Chapter_16_Moderate/Problem_17');

describe('chapterSixteenProblemSeventeenBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayOfIntegersOne = 5.4;
        expect(function() {
            Problem_17.chapterSixteenProblemSeventeenBruteForceSolution(arrayOfIntegersOne);
        }).to.throw(Error);
    });
    it('returns null for an array with no elements', function() {
        const arrayOfIntegersOne = [];
        assert.equal(Problem_17.chapterSixteenProblemSeventeenBruteForceSolution(arrayOfIntegersOne), null);
    });
    it('returns value in array for an array with one element', function() {
        const arrayOfIntegersOne = [-400];
        assert.equal(Problem_17.chapterSixteenProblemSeventeenBruteForceSolution(arrayOfIntegersOne), -400);
    });
    it('returns 2 for [-8, 2]', function() {
        const arrayOfIntegersOne = [-8, 2];
        assert.equal(Problem_17.chapterSixteenProblemSeventeenBruteForceSolution(arrayOfIntegersOne), 2);
    });
    it('returns 5 for [2, -8, 3, -2, 4, -10]', function() {
        const arrayOfIntegersOne = [2, -8, 3, -2, 4, -10];
        assert.equal(Problem_17.chapterSixteenProblemSeventeenBruteForceSolution(arrayOfIntegersOne), 5);
    });
});
