const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_17_Hard/Problem_2');
const MergeSort = require('../CTCI_5/Chapter_VII_Technical_Questions/ArrayOfNumbers_MergeSort');

describe('chapterSeventeenProblemTwoBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const deckOfCardsOne = 'hi';
        expect(function() {
            Problem_2.chapterSeventeenProblemTwoBruteForceSolution(deckOfCardsOne);
        }).to.throw(Error);
    });
    it('should return null if there are less than m unique values in the array', function() {
        const deckOfCardsOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
        const testSortedDeck = deckOfCardsOne.slice();
        const shuffledDeckOfCards = Problem_2.chapterSeventeenProblemTwoBruteForceSolution(deckOfCardsOne);
        const shortedShuffledDeckOfCards = new MergeSort(shuffledDeckOfCards).sortByAscendingOrder();
        assert.equal(JSON.stringify(testSortedDeck), JSON.stringify(shortedShuffledDeckOfCards));
    });
});
