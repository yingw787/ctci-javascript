/*
    Design the data structures for a generic deck of cards. Explain how you would subclass the data structures to implement blackjack.
*/

// TODO: REVIEW THIS PROBLEM I DON'T KNOW HOW TO PLAY BLACKJACK
const assert = require('assert');

const typesOfCards = {
    'ACE': 0,
    'ONE': 1,
    'TWO': 2,
    'THREE': 3,
    'FOUR': 4,
    'FIVE': 5,
    'SIX': 6,
    'SEVEN': 7,
    'EIGHT': 8,
    'NINE': 9,
    'JACK': 10,
    'QUEEN': 11,
    'KING': 12,
};

function _getRankFromValue(value) {
    for (let rank of Object.keys(typesOfCards)) {
        if (typesOfCards[rank] === value) {
            return rank;
        }
    }
    return null;
}

const typesOfSuits = {
    'HEARTS': 'HEARTS',
    'CLUBS': 'CLUBS',
    'SPADES': 'SPADES',
    'DIAMONDS': 'DIAMONDS',
};

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

class DeckOfCards {
    constructor() {
        this.deck = {};
        this._initializeSuit(typesOfSuits.HEARTS);
        this._initializeSuit(typesOfSuits.DIAMONDS);
        this._initializeSuit(typesOfSuits.CLUBS);
        this._initializeSuit(typesOfSuits.SPADES);
        this.numberOfCardsCurrentlyInDeck = 52;
    }
    _initializeSuit(suitName) {
        const newSuit = {};
        for (let cardRank of Object.keys(typesOfCards)) {
            const card = new Card(suitName, typesOfCards[cardRank]);
            newSuit[cardRank] = card;
        }
        this.deck[suitName] = newSuit;
    }
    popCardIfExists(suitName, rank) {
        assert(typeof suitName === 'string');
        assert(typeof rank === 'string');
        if (!(suitName in typesOfSuits)) {
            throw new Error('invalid suit name. Must be HEARTS, CLUBS, SPADES, or DIAMONDS.');
        }
        if (!(rank in typesOfCards)) {
            throw new Error('invalid rank.');
        }
        const suit = this.deck[suitName];
        if (!(rank in suit)) {
            return null;
        }

        const card = suit[rank];
        delete this.deck[suitName][rank];
        this.numberOfCardsCurrentlyInDeck -= 1;

        return card;
    }
    _returnCardsInDeckAsArray() {
        const arrayOfCardsInDeck = [];
        for (let suit of Object.keys(this.deck)) {
            for (let rank of Object.keys(this.deck[suit])) {
                arrayOfCardsInDeck.push(this.deck[suit][rank]);
            }
        }
        return arrayOfCardsInDeck;
    }
    popShuffledCardIfDeckIsNotEmpty() {
        const arrayOfCardsInDeck = this._returnCardsInDeckAsArray();
        const randomIndex = Math.floor(Math.random() * arrayOfCardsInDeck.length);

        const card = arrayOfCardsInDeck[randomIndex];
        this.popCardIfExists(card.suit, _getRankFromValue(card.rank));
        return arrayOfCardsInDeck[randomIndex];
    }
    isEmpty() {
        return this.numberOfCardsCurrentlyInDeck === 0;
    }
}

module.exports = {
    chapterSevenProblemOneBruteForceSolution: DeckOfCards,
};
