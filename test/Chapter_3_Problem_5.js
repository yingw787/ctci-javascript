const chai = require('chai');
const assert = chai.assert;

const Problem_5 = require('../CTCI_5/Chapter_3_Stacks_And_Queues/Problem_5');

describe('chapterThreeProblemFiveBookSolution', function() {
    it('should initialize correctly', function() {
        const sortableStack = new Problem_5.chapterThreeProblemFiveBookSolution();
        assert.equal(sortableStack.isEmpty(), true);
    });
    it('should be able to push and pop values normally', function() {
        const sortableStack = new Problem_5.chapterThreeProblemFiveBookSolution();
        assert.equal(sortableStack.isEmpty(), true);

        sortableStack.push(5);
        sortableStack.push(50);
        sortableStack.push(6);
        sortableStack.push(60);
        sortableStack.push(7);
        sortableStack.push(70);

        const valueOne = sortableStack.pop();
        const valueTwo = sortableStack.pop();
        const valueThree = sortableStack.pop();
        const valueFour = sortableStack.pop();
        const valueFive = sortableStack.pop();
        const valueSix = sortableStack.pop();

        assert.equal(valueOne, 70);
        assert.equal(valueTwo, 7);
        assert.equal(valueThree, 60);
        assert.equal(valueFour, 6);
        assert.equal(valueFive, 50);
        assert.equal(valueSix, 5);
    });
    it('should be able to push and pop sorted values', function() {
        const sortableStack = new Problem_5.chapterThreeProblemFiveBookSolution();
        assert.equal(sortableStack.isEmpty(), true);

        sortableStack.push(5);
        sortableStack.push(50);
        sortableStack.push(6);
        sortableStack.push(60);
        sortableStack.push(7);
        sortableStack.push(70);

        sortableStack.sort();

        const valueOne = sortableStack.pop();
        const valueTwo = sortableStack.pop();
        const valueThree = sortableStack.pop();
        const valueFour = sortableStack.pop();
        const valueFive = sortableStack.pop();
        const valueSix = sortableStack.pop();

        assert.equal(valueOne, 5);
        assert.equal(valueTwo, 6);
        assert.equal(valueThree, 7);
        assert.equal(valueFour, 50);
        assert.equal(valueFive, 60);
        assert.equal(valueSix, 70);
    });
});
