const chai = require('chai');
const assert = chai.assert;

const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/singlyLinkedList');
const Problem_5 = require('../CTCI_5/Chapter_2_Linked_Lists/Problem_5');

describe('chapterTwoProblemFiveBruteForceSolution', function() {
    it('should give correct value here', function() {
        const valueOne = new SinglyLinkedList();
        valueOne.append(7);
        valueOne.append(1);
        valueOne.append(6);

        const valueTwo = new SinglyLinkedList();
        valueTwo.append(5);
        valueTwo.append(9);
        valueTwo.append(2);

        const result = Problem_5.chapterTwoProblemFiveBruteForceSolution(valueOne, valueTwo);

        const testResult = new SinglyLinkedList();
        testResult.append(2);
        testResult.append(1);
        testResult.append(9);

        assert.equal(JSON.stringify(result), JSON.stringify(testResult));
    });
});

describe('chapterTwoProblemFiveBruteForceSolutionFollowUp', function() {
    it('should give correct value here', function() {
        const valueOne = new SinglyLinkedList();
        valueOne.append(6);
        valueOne.append(1);
        valueOne.append(7);

        const valueTwo = new SinglyLinkedList();
        valueTwo.append(2);
        valueTwo.append(9);
        valueTwo.append(5);

        const result = Problem_5.chapterTwoProblemFiveBruteForceSolutionFollowUp(valueOne, valueTwo);

        const testResult = new SinglyLinkedList();
        testResult.append(9);
        testResult.append(1);
        testResult.append(2);

        assert.equal(JSON.stringify(result), JSON.stringify(testResult));
    });
});
