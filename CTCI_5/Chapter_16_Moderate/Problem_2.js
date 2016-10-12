/*
    Design a method to find the frequency of any given word in a book. What if we were running this algorithm multiple times?
*/
'use strict';

const assert = require('assert');

// O(N) time, N = size of bookInput
// O(1) space
function chapterSixteenProblemTwoBruteForceSolution(bookInput, word) {
    assert(typeof bookInput === 'string');
    assert(typeof word === 'string');

    let numberOfWords = 0;
    for (let i = 0; i < bookInput.length - word.length; i++) {
        if (bookInput.slice(i, i + word.length) === word) {
            numberOfWords++;
        }
    }
    return numberOfWords;
}

/*
    chapterSixTeenProblemTwoImprovedSolution
    (Depending on whether the string is case sensitive) Set the string to all lowercase or uppercase. Split the passage string into an array based on a regex of punctuation. Add each word to a hashmap along with a frequency of encounters. Every other call, check to see whether the hashmap is initialized for a given string, if so check the map and return the frequency of the desired word.

    O(N) time, O(1) amortized time
    O(N) space

    CORRECT NO REDO
    ASK INTERVIEWER FOR TIPS ON HOW INPUT IS FORMATTED
*/

module.exports = {
    chapterSixteenProblemTwoBruteForceSolution: chapterSixteenProblemTwoBruteForceSolution,
};
