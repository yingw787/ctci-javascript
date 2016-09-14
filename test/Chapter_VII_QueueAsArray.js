const chai = require('chai');
const assert = chai.assert;

const QueueAsArray = require('../CTCI_5/Chapter_VII_Technical_Questions/QueueAsArray');

describe('QueueAsArray', function() {
    it('should be able to queue and enqueue basic values', function() {
        const queue = new QueueAsArray();
        queue.enqueue('hi');
        const value = queue.dequeueIfNotEmpty();
        assert.equal(value, 'hi');
    });
    it('should be able to queue and enqueue values in the correct order', function() {
        const queue = new QueueAsArray();
        queue.enqueue('1');
        queue.enqueue('2');
        const one = queue.dequeueIfNotEmpty();
        const two = queue.dequeueIfNotEmpty();
        assert.equal(one, '1');
        assert.equal(two, '2');
    });
});
