const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_10 = require('../CTCI_5/Chapter_16_Moderate/Problem_10');

describe('chapterSixteenProblemTenBruteForceSolution', function() {
    it('should throw an error upon incorrect inputs', function() {
        const numberOne = 5.4;
        const numberTwo = 'hi';
        expect(function() {
            Problem_10.chapterSixteenProblemTenBruteForceSolution(numberOne, numberTwo);
        }).to.throw(Error);

        const numberThree = 5.4;
        const numberFour = 5;
        expect(function() {
            Problem_10.chapterSixteenProblemTenBruteForceSolution(numberThree, numberFour);
        }).to.throw(Error);
    });
    it('should return null for empty array', function() {
        const arrayOfPeopleObjects = [];
        assert.equal(Problem_10.chapterSixteenProblemTenBruteForceSolution(arrayOfPeopleObjects), null);
    });
    it('should return 1908 for array with one object', function() {
        const arrayOfPeopleObjects = [{'birth': 1908, 'death': 1909}];
        assert.equal(Problem_10.chapterSixteenProblemTenBruteForceSolution(arrayOfPeopleObjects), 1908);
    });
    it('should return 1950 for array listed below', function() {
        const arrayOfPeopleObjects = [{'birth': 1910, 'death': 1970}, {'birth': 1950, 'death': 2000}, {'birth': 1990, 'death': 2010}];
        assert.equal(Problem_10.chapterSixteenProblemTenBruteForceSolution(arrayOfPeopleObjects), 1950);
    });
});
