/*
    Write a method to shuffle a deck of cards. It must be a perfect shuffle - in other words, each of the 52! permutations of the deck has to be equally likely. Assume that you are given a random number generator which is perfect.
*/
'use strict';

const assert = require('assert');

function chapterSeventeenProblemTwoBruteForceSolution(deckOfCards) {
    assert(typeof deckOfCards === 'object');
    for (let i = 0; i < deckOfCards.length; i++) {
        assert(typeof deckOfCards[i] === 'number' && deckOfCards[i] % 1 === 0 && deckOfCards[i] >= 1 && deckOfCards[i] <= 52);
    }
    const result = [];
    while (deckOfCards.length > 0) {
        const value = deckOfCards.splice(Math.floor(Math.random() * deckOfCards.length), 1)[0];
        result.push(value);
    }
    return result;
}

module.exports = {
    chapterSeventeenProblemTwoBruteForceSolution: chapterSeventeenProblemTwoBruteForceSolution,
};
