const chai = require('chai');
const assert = chai.assert;

const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/singlyLinkedList');
const Problem_4 = require('../CTCI_5/Chapter_2_Linked_Lists/Problem_4');

describe('chapterTwoProblemFourBruteForceSolution', function() {
    it('should give correct value here', function() {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append(3);
        singlyLinkedList.append(5);
        singlyLinkedList.append(8);
        singlyLinkedList.append(5);
        singlyLinkedList.append(10);
        singlyLinkedList.append(2);
        singlyLinkedList.append(1);

        Problem_4.chapterTwoProblemFourBruteForceSolution(singlyLinkedList, 5);

        const newSinglyLinkedList = new SinglyLinkedList();
        newSinglyLinkedList.append(1);
        newSinglyLinkedList.append(2);
        newSinglyLinkedList.append(3);
        newSinglyLinkedList.append(5);
        newSinglyLinkedList.append(5);
        newSinglyLinkedList.append(8);
        newSinglyLinkedList.append(10);

        assert.equal(JSON.stringify(singlyLinkedList), JSON.stringify(newSinglyLinkedList));
    });
});

describe('chapterTwoProblemFourBookSolutionOne', function() {
    it('should give correct value here', function() {
        let singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append(3);
        singlyLinkedList.append(5);
        singlyLinkedList.append(8);
        singlyLinkedList.append(5);
        singlyLinkedList.append(10);
        singlyLinkedList.append(2);
        singlyLinkedList.append(1);

        singlyLinkedList = Problem_4.chapterTwoProblemFourBookSolutionOne(singlyLinkedList, 5);

        const newSinglyLinkedList = new SinglyLinkedList();
        newSinglyLinkedList.append(3);
        newSinglyLinkedList.append(2);
        newSinglyLinkedList.append(1);
        newSinglyLinkedList.append(5);
        newSinglyLinkedList.append(8);
        newSinglyLinkedList.append(5);
        newSinglyLinkedList.append(10);

        assert.equal(JSON.stringify(singlyLinkedList), JSON.stringify(newSinglyLinkedList));
    });
});

describe('chapterTwoProblemFourBookSolutionTwo', function() {
    it('should give correct value here', function() {
        let singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append(3);
        singlyLinkedList.append(5);
        singlyLinkedList.append(8);
        singlyLinkedList.append(5);
        singlyLinkedList.append(10);
        singlyLinkedList.append(2);
        singlyLinkedList.append(1);

        Problem_4.chapterTwoProblemFourBookSolutionTwo(singlyLinkedList, 5);

        const newSinglyLinkedList = new SinglyLinkedList();
        newSinglyLinkedList.append(1);
        newSinglyLinkedList.append(2);
        newSinglyLinkedList.append(3);
        newSinglyLinkedList.append(5);
        newSinglyLinkedList.append(8);
        newSinglyLinkedList.append(5);
        newSinglyLinkedList.append(10);

        assert.equal(JSON.stringify(singlyLinkedList), JSON.stringify(newSinglyLinkedList));
    });
});
