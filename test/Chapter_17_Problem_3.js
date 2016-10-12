const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_17_Hard/Problem_2');

describe('chapterSeventeenProblemTwoBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayOfIntegersOne = 'hi';
        const m_1 = [];
        expect(function() {
            Problem_2.chapterSeventeenProblemTwoBruteForceSolution(arrayOfIntegersOne, m_1);
        }).to.throw(Error);
    });
    it('should return null if there are less than m unique values in the array', function() {
        const arrayOfIntegersOne = [5, 5, 5, 5, 5];
        const m_1 = 2;
        assert.equal(Problem_2.chapterSeventeenProblemTwoBruteForceSolution(arrayOfIntegersOne, m_1), null);
    });
    it('should return a set from the array', function() {
        const arrayOfIntegersOne = [5, 5, 5, 6, 5];
        const m_1 = 2;
        assert.equal(JSON.stringify(Problem_2.chapterSeventeenProblemTwoBruteForceSolution(arrayOfIntegersOne, m_1)), JSON.stringify([5, 6]));
    });
});
