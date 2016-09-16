const chai = require('chai');
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_3_Stacks_And_Queues/Problem_3');

describe('chapterThreeProblemThreeBruteForceSolution', function() {
    it('should initialize correctly', function() {
        const setOfStacks = new Problem_3.chapterThreeProblemThreeBruteForceSolution();
        assert.equal(setOfStacks.isEmpty(), true);
    });
    it('should be able to push values past max capacity and still work', function() {
        const setOfStacks = new Problem_3.chapterThreeProblemThreeBruteForceSolution();
        assert.equal(setOfStacks.isEmpty(), true);

        setOfStacks.push(1);
        setOfStacks.push(2);
        setOfStacks.push(3);
        setOfStacks.push(4);
        setOfStacks.push(5);

        assert.equal(setOfStacks.peek().data, 5);
    });
    it('should be able to pop values from above max capacity to below max capacity and still work', function() {
        const setOfStacks = new Problem_3.chapterThreeProblemThreeBruteForceSolution();
        assert.equal(setOfStacks.isEmpty(), true);

        setOfStacks.push(1);
        setOfStacks.push(2);
        setOfStacks.push(3);
        setOfStacks.push(4);
        setOfStacks.push(5);

        assert.equal(setOfStacks.peek().data, 5);

        setOfStacks.pop();
        setOfStacks.pop();
        setOfStacks.pop();

        assert.equal(setOfStacks.pop(), 2);
    });
    it('should be able to pop values from a specific index', function() {
        const setOfStacks = new Problem_3.chapterThreeProblemThreeBruteForceSolution();
        assert.equal(setOfStacks.isEmpty(), true);

        setOfStacks.push(1);
        setOfStacks.push(2);
        setOfStacks.push(3);
        setOfStacks.push(4);
        setOfStacks.push(5);

        assert.equal(setOfStacks.popAt(0), 3);

    });
});
