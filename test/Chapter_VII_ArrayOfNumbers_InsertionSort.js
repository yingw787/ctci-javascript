const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const ArrayOfNumbers_InsertionSort = require('../CTCI_5/Chapter_VII_Technical_Questions/ArrayOfNumbers_InsertionSort');

describe('ArrayOfNumbers_InsertionSort', function() {
    it('should be able to throw error upon initializing with wrong type', function() {
        const array = 5;
        expect(function() {
            new ArrayOfNumbers_InsertionSort(array);
        }).to.throw(Error);
    });
    it('[5, 1, 4, 2, 8] should return [1, 2, 4, 5, 8]', function() {
        const array = [5, 1, 4, 2, 8];
        const sortedArray = new ArrayOfNumbers_InsertionSort(array).sortByAscendingOrder();
        assert.equal(JSON.stringify(sortedArray), JSON.stringify([1, 2, 4, 5, 8]));
    });
    it('[5] should return [5]', function() {
        const array = [5];
        const sortedArray = new ArrayOfNumbers_InsertionSort(array).sortByAscendingOrder();
        assert.equal(JSON.stringify(sortedArray), JSON.stringify([5]));
    });
});
