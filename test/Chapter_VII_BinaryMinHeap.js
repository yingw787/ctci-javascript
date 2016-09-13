'use strict';

const chai = require('chai');
const assert = chai.assert;

const BinaryMinHeap = require('../CTCI_5/Chapter_VII_Technical_Questions/BinaryMinHeap');

describe('BinaryMinHeap', function() {
    it('should be able to initialize', function() {
        const heap = new BinaryMinHeap();
        assert.equal(heap.size, 0);
    });
    it('can insert value', function() {
        const heap = new BinaryMinHeap();
        heap.insert(1);
        assert.equal(heap.size, 1);
        assert.equal(heap.minHeap[1], 1);
    });
    it('can remove value', function() {
        const heap = new BinaryMinHeap();
        heap.insert(1);
        assert.equal(heap.size, 1);
        assert.equal(heap.minHeap[1], 1);
        heap.remove(1);
        assert.equal(heap.size, 0);
        assert.equal(heap.minHeap[1], undefined);
    });
    it('can insert values in random order and return them in ascending order', function() {
        const heap = new BinaryMinHeap();
        heap.insert(55);
        heap.insert(90);
        heap.insert(87);
        heap.insert(2);
        heap.insert(4);
        heap.insert(50);
        heap.insert(7);
        assert.equal(heap.size, 7);

        const values = [];
        const iterations = heap.size;
        for (let i = 0; i < iterations; i++) {
            values.push(heap.remove());
        }

        assert.equal(JSON.stringify(values), JSON.stringify([2, 4, 7, 50, 55, 87, 90]));
    });
});
