const chai = require('chai');
const assert = chai.assert;

const Problem_4 = require('../CTCI_5/Chapter_3_Stacks_And_Queues/Problem_4');

describe('chapterThreeProblemFourBruteForceSolution', function() {
    it('should initialize correctly', function() {
        const queue = new Problem_4.chapterThreeProblemFourBruteForceSolution();
        assert.equal(queue.isEmpty(), true);
    });
    it('should be able to enqueue and dequeue items', function() {
        const queue = new Problem_4.chapterThreeProblemFourBruteForceSolution();
        assert.equal(queue.isEmpty(), true);

        queue.add(5);
        queue.add(6);
        queue.add(7);
        assert.equal(queue.peek(), 5);

        const valueOne = queue.remove();
        assert.equal(valueOne, 5);

        const valueTwo = queue.remove();
        assert.equal(valueTwo, 6);

        const valueThree = queue.remove();
        assert.equal(valueThree, 7);
    });
});
