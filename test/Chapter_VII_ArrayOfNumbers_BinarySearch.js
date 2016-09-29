const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const ArrayOfNumbers_BinarySearch = require('../CTCI_5/Chapter_VII_Technical_Questions/ArrayOfNumbers_BinarySearch');

describe('ArrayOfNumbers_BinarySearch', function() {
    it('should be able to throw error upon initializing with wrong type', function() {
        const array = 5;
        expect(function() {
            new ArrayOfNumbers_BinarySearch(array);
        }).to.throw(Error);
    });
    it('[1, 2, 4, 5, 8] search for 8 should return 4', function() {
        const array = [1, 2, 4, 5, 8];
        const searchedValue = new ArrayOfNumbers_BinarySearch(array).binarySearch(8);
        assert.equal(searchedValue, 4);
    });
    it('[1, 2, 4, 5, 8] search for 100 should return -1', function() {
        const array = [1, 2, 4, 5, 8];
        const searchedValue = new ArrayOfNumbers_BinarySearch(array).binarySearch(100);
        assert.equal(searchedValue, -1);
    });
    it('[1, 2, 4, 5, 8] search for 8 should return 4 for recursive binary search', function() {
        const array = [1, 2, 4, 5, 8];
        const searchedValue = new ArrayOfNumbers_BinarySearch(array).binarySearchRecursive(8);
        assert.equal(searchedValue, 4);
    });
    it('[1, 2, 4, 5, 8] search for 100 should return -1 for recursive binary search', function() {
        const array = [1, 2, 4, 5, 8];
        const searchedValue = new ArrayOfNumbers_BinarySearch(array).binarySearchRecursive(100);
        assert.equal(searchedValue, -1);
    });
});
