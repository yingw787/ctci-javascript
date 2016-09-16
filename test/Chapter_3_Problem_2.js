const chai = require('chai');
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_3_Stacks_And_Queues/Problem_2');

describe('chapterThreeProblemTwoBruteForceSolution', function() {
    it('should initialize correctly', function() {
        const stackWithMin = new Problem_2.chapterThreeProblemTwoBruteForceSolution();
        assert.equal(stackWithMin.isEmpty(), true);
    });
    it('should be able to add values to each stack and return them correctly', function() {
        const stackWithMin = new Problem_2.chapterThreeProblemTwoBruteForceSolution();
        assert.equal(stackWithMin.isEmpty(), true);

        stackWithMin.push(5);
        stackWithMin.push(6);
        stackWithMin.push(7);
        assert.equal(stackWithMin.peek(), 7);

        stackWithMin.pop();
        assert.equal(stackWithMin.peek(), 6);

        stackWithMin.pop();
        assert.equal(stackWithMin.peek(), 5);
    });
    it('should be able to return the min', function() {
        const stackWithMin = new Problem_2.chapterThreeProblemTwoBruteForceSolution();
        assert.equal(stackWithMin.isEmpty(), true);

        stackWithMin.push(7);
        stackWithMin.push(1);
        stackWithMin.push(3);
        assert.equal(stackWithMin.min(), 1);

    });
});
