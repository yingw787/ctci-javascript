const chai = require('chai');
const assert = chai.assert;

const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/singlyLinkedList');
const Problem_6 = require('../CTCI_5/Chapter_2_Linked_Lists/Problem_6');

describe('chapterTwoProblemSixBruteForceSolution', function() {
    it('should give correct value here', function() {
        const palindrome = new SinglyLinkedList();
        palindrome.append('a');
        palindrome.append('b');
        palindrome.append('a');

        const trueResult = Problem_6.chapterTwoProblemSixBruteForceSolution(palindrome);
        assert.equal(trueResult, true);

        const notAPalindrome = new SinglyLinkedList();
        notAPalindrome.append('a');
        notAPalindrome.append('b');
        notAPalindrome.append('c');

        const falseResult = Problem_6.chapterTwoProblemSixBruteForceSolution(notAPalindrome);
        assert.equal(falseResult, false);
    });
});
