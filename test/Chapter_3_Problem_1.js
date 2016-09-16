const chai = require('chai');
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_3_Stacks_And_Queues/Problem_1');

describe('chapterThreeProblemOneBruteForceSolution', function() {
    it('should initialize correctly', function() {
        const threeStacksUsingArray = new Problem_1.chapterThreeProblemOneBruteForceSolution();
        assert.equal(threeStacksUsingArray.isEmpty(), true);
    });
    it('should be able to add values to each stack and return them correctly', function() {
        const threeStacksUsingArray = new Problem_1.chapterThreeProblemOneBruteForceSolution();
        assert.equal(threeStacksUsingArray.isEmpty(), true);

        threeStacksUsingArray.push(1, 5);
        threeStacksUsingArray.push(1, 50);
        threeStacksUsingArray.push(2, 6);
        threeStacksUsingArray.push(2, 60);
        threeStacksUsingArray.push(3, 7);
        threeStacksUsingArray.push(3, 70);

        assert.equal(threeStacksUsingArray.peek(1), 50);
        assert.equal(threeStacksUsingArray.peek(2), 60);
        assert.equal(threeStacksUsingArray.peek(3), 70);
    });
    it('should be able to add and remove values to each stack and return them correctly', function() {
        const threeStacksUsingArray = new Problem_1.chapterThreeProblemOneBruteForceSolution();
        assert.equal(threeStacksUsingArray.isEmpty(), true);

        threeStacksUsingArray.push(1, 5);
        threeStacksUsingArray.push(1, 50);
        threeStacksUsingArray.push(2, 6);
        threeStacksUsingArray.push(2, 60);
        threeStacksUsingArray.push(3, 7);
        threeStacksUsingArray.push(3, 70);

        assert.equal(threeStacksUsingArray.peek(1), 50);
        assert.equal(threeStacksUsingArray.peek(2), 60);
        assert.equal(threeStacksUsingArray.peek(3), 70);

        const stackThreeValueOne = threeStacksUsingArray.pop(3);
        const stackOneValueOne = threeStacksUsingArray.pop(1);
        const stackTwoValueOne = threeStacksUsingArray.pop(2);

        assert.equal(stackThreeValueOne, 70);
        assert.equal(stackOneValueOne, 50);
        assert.equal(stackTwoValueOne, 60);

        const stackThreeValueTwo = threeStacksUsingArray.pop(3);
        const stackOneValueTwo = threeStacksUsingArray.pop(1);
        const stackTwoValueTwo = threeStacksUsingArray.pop(2);

        assert.equal(stackThreeValueTwo, 7);
        assert.equal(stackOneValueTwo, 5);
        assert.equal(stackTwoValueTwo, 6);
    });
});
