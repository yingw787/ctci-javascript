const chai = require('chai');
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_3');
const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/SinglyLinkedList');

describe('chapterFourProblemThreeBruteForceSolution', function() {
    it('should generate three linked lists from input of this binary search tree', function() {
        const sortedArray = [2, 4, 7, 50, 55, 87, 90];
        const depthLinkedListObject = Problem_3.chapterFourProblemThreeBruteForceSolution(sortedArray);

        const linkedListOne = new SinglyLinkedList();
        linkedListOne.append(50);

        const linkedListTwo = new SinglyLinkedList();
        linkedListTwo.append(4);
        linkedListTwo.append(87);

        const linkedListThree = new SinglyLinkedList();
        linkedListThree.append(2);
        linkedListThree.append(7);
        linkedListThree.append(55);
        linkedListThree.append(90);

        const testDepthLinkedListObject = {
            '0': linkedListOne,
            '1': linkedListTwo,
            '2': linkedListThree,
        };

        assert.equal(JSON.stringify(depthLinkedListObject), JSON.stringify(testDepthLinkedListObject));
    });
});
