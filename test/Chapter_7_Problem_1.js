const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_7_Object_Oriented_Design/Problem_1');

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

describe('chapterSevenProblemOneBruteForceSolution', function() {
    it('should initialize with a full deck of cards', function() {
        const deckOfCards = new Problem_1.chapterSevenProblemOneBruteForceSolution().deck;
        assert.equal(Object.keys(deckOfCards).length, 4);
        for (let suitName of Object.keys(deckOfCards)) {
            assert.equal(Object.keys(deckOfCards[suitName]).length, 13);
        }
    });
    it('should be able to pop a card given a suit name and a rank', function() {
        const DeckOfCardsInstance = new Problem_1.chapterSevenProblemOneBruteForceSolution();
        const deck = JSON.parse(JSON.stringify(DeckOfCardsInstance.deck));

        expect(function() {
            DeckOfCardsInstance.popCard(5, 6);
        }).to.throw(Error);

        expect(function() {
            DeckOfCardsInstance.popCard('ZOMBIES', 'ACE');
        }).to.throw(Error);

        expect(function() {
            DeckOfCardsInstance.popCard('HEARTS', 'ZOMBIES');
        }).to.throw(Error);

        const poppedCardThatShouldExist = DeckOfCardsInstance.popCardIfExists('HEARTS', 'ACE');
        const testPoppedCardThatShouldExist = new Card('HEARTS', 0);
        assert.equal(JSON.stringify(poppedCardThatShouldExist), JSON.stringify(testPoppedCardThatShouldExist));

        const deckAfterPoppingCard = JSON.parse(JSON.stringify(DeckOfCardsInstance.deck));
        assert.equal(JSON.stringify(deck) === JSON.stringify(deckAfterPoppingCard), false);
        assert.equal(Object.keys(deckAfterPoppingCard.HEARTS).length === 12, true);

        const poppedCardThatShouldNotExist = DeckOfCardsInstance.popCardIfExists('HEARTS', 'ACE');
        assert.equal(poppedCardThatShouldNotExist, null);
    });
    it('should be able to pop a shuffled card', function() {
        const DeckOfCardsInstance = new Problem_1.chapterSevenProblemOneBruteForceSolution();

        while (DeckOfCardsInstance.numberOfCardsCurrentlyInDeck > 0) {
            const poppedShuffledCardThatShouldExist = DeckOfCardsInstance.popShuffledCardIfDeckIsNotEmpty();
            assert.equal(poppedShuffledCardThatShouldExist !== null, true);
        }

        assert.equal(DeckOfCardsInstance.isEmpty(), true);
    });
});
