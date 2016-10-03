const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_10_Sorting_And_Searching/Problem_1');

describe('chapterTenProblemOneBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const sortedArrayA_1 = 5;
        const sortedArrayB_1 = 6;
        expect(function() {
            Problem_1.chapterTenProblemOneBruteForceSolution(sortedArrayA_1, sortedArrayB_1);
        }).to.throw(Error);

        const sortedArrayA_2 = 5;
        const sortedArrayB_2 = 'hi';
        expect(function() {
            Problem_1.chapterTenProblemOneBruteForceSolution(sortedArrayA_2, sortedArrayB_2);
        }).to.throw(Error);
    });
    it('should throw error when either array of numbers are not sorted', function() {
        const sortedArrayA_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const sortedArrayB_1 = [3, 5, 6, 1, 8, 9, 10];
        expect(function() {
            Problem_1.chapterTenProblemOneBruteForceSolution(sortedArrayA_1, sortedArrayB_1);
        }).to.throw(Error);

        const sortedArrayA_2 = [3, 9, 10, 7, 3, 1];
        const sortedArrayB_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(function() {
            Problem_1.chapterTenProblemOneBruteForceSolution(sortedArrayA_2, sortedArrayB_2);
        }).to.throw(Error);
    });
    it('should return [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10, 12] when given [1, 2, 3, 4, 5, 6, 7, 9, 12] and [5, 6, 8, 10]', function() {
        const sortedArrayA_1 = [1, 2, 3, 4, 5, 6, 7, 9, 12];
        const sortedArrayB_1 = [5, 6, 8, 10];
        assert.equal(JSON.stringify(Problem_1.chapterTenProblemOneBruteForceSolution(sortedArrayA_1, sortedArrayB_1)), JSON.stringify([1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10, 12]));
    });
    it('should return [1, 2, 4, 8, 100, 130, 150, 170] when given [1, 2, 4, 8] and [100, 130, 150, 170]', function() {
        const sortedArrayA_1 = [1, 2, 4, 8];
        const sortedArrayB_1 = [100, 130, 150, 170];
        assert.equal(JSON.stringify(Problem_1.chapterTenProblemOneBruteForceSolution(sortedArrayA_1, sortedArrayB_1)), JSON.stringify([1, 2, 4, 8, 100, 130, 150, 170]));
    });
});
