const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const ArrayOfNumbers_MergeSort = require('../CTCI_5/Chapter_VII_Technical_Questions/ArrayOfNumbers_MergeSort');

describe('ArrayOfNumbers_MergeSort', function() {
    it('should be able to throw error upon initializing with wrong type', function() {
        const array = 5;
        expect(function() {
            new ArrayOfNumbers_MergeSort(array);
        }).to.throw(Error);
    });
    it('[5, 1, 4, 2, 8] should return [1, 2, 4, 5, 8]', function() {
        const array = [5, 1, 4, 2, 8];
        const sortedArray = new ArrayOfNumbers_MergeSort(array).sortByAscendingOrder();
        assert.equal(JSON.stringify(sortedArray), JSON.stringify([1, 2, 4, 5, 8]));
    });
    it('[5] should return [5]', function() {
        const array = [5];
        const sortedArray = new ArrayOfNumbers_MergeSort(array).sortByAscendingOrder();
        assert.equal(JSON.stringify(sortedArray), JSON.stringify([5]));
    });
});
