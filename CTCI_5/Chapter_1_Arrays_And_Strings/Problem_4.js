/*
    Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
*/
'use strict';

const _addStringToDictionary = (string, dictionary) => {
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        if (JSON.stringify(char) === JSON.stringify(' ')) { continue; }
        if (char in dictionary) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    }
};

module.exports = {
    chapterOneProblemFourBruteForceSolution: string => {
        const dictionary = {};
        let oneOdd = false;
        _addStringToDictionary(string, dictionary);
        for (const key in dictionary) {
            if (dictionary[key] % 2 !== 0) {
                if (oneOdd) {
                    return false;
                } else {
                    oneOdd = true;
                }
            }
        }
        return true;
    },
};
