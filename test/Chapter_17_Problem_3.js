const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_17_Hard/Problem_3');
const MergeSort = require('../CTCI_5/Chapter_VII_Technical_Questions/ArrayOfNumbers_MergeSort');

describe('chapterSeventeenProblemThreeBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayOfIntegersOne = 'hi';
        const m_1 = [];
        expect(function() {
            Problem_3.chapterSeventeenProblemThreeBruteForceSolution(arrayOfIntegersOne, m_1);
        }).to.throw(Error);
    });
    it('should return null if there are less than m unique values in the array', function() {
        const arrayOfIntegersOne = [5, 5, 5, 5, 5];
        const m_1 = 2;
        assert.equal(Problem_3.chapterSeventeenProblemThreeBruteForceSolution(arrayOfIntegersOne, m_1), null);
    });
    it('should return a set from the array', function() {
        const arrayOfIntegersOne = [5, 5, 5, 6, 5];
        const m_1 = 2;
        const result = new MergeSort(Problem_3.chapterSeventeenProblemThreeBruteForceSolution(arrayOfIntegersOne, m_1)).sortByAscendingOrder();

        assert.equal(JSON.stringify(result), JSON.stringify([5, 6]));
    });
});
