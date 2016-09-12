const chai = require('chai');
const assert = chai.assert;

const Queue = require('../CTCI_5/Chapter_VII_Technical_Questions/Queue');

describe('Queue', function() {
    it('should be able to queue and enqueue basic values', function() {
        const queue = new Queue();
        queue.enqueue('hi');
        const value = queue.dequeue();
        assert.equal(value.data, 'hi');
    });
    it('should be able to queue and enqueue values in the correct order', function() {
        const queue = new Queue();
        queue.enqueue('1');
        queue.enqueue('2');
        const one = queue.dequeue();
        const two = queue.dequeue();
        assert.equal(one.data, '1');
        assert.equal(two.data, '2');
    });
});
