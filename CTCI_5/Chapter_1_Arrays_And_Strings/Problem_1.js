/*
    Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/
'use strict';

const includes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};

module.exports = {
    chapterOneProblemOneBruteForceSolution: stringInput => {
        const appearedCharacters = [];
        for (let i = 0; i < stringInput.length; i++) {
            const currentCharacter = stringInput.indexOf(i);
            if (includes(appearedCharacters, currentCharacter)) {
                return false;
            }
            appearedCharacters.push(currentCharacter);
        }
        return true;
    },
    // Big O Run: O(N^2), assuming _.includes is an O(N) operation
    // Big O Space: O(N)
    chapterOneProblemOneImprovedSolution: stringInput => {
        const appearedCharacters = {};
        for (let i = 0; i < stringInput.length; i++) {
            const currentCharacter = stringInput.charAt(i);
            if (appearedCharacters[currentCharacter]) {
                return false;
            }
            appearedCharacters[currentCharacter] = 1;
        }
        return true;
    },

    // Big O Time: O(N)
    // Big O Space: O(1)
    // TODO: come back to this when I understand bit manipulation
    chapterOneProblemOneBookSolution: stringInput => {
        let checker = 0;
        for (let i = 0; i < stringInput.length; i++) {
            const val = stringInput.charAt(i) - 'a';
            if ((checker && (1 << val)) > 0) {
                return false;
            }
            checker |= (1 << val);
        }
        return true;
    },
};
