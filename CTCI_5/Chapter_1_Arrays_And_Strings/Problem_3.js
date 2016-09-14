/*
    Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
*/
'use strict';

module.exports = {
    // O(N) time
    // O(N) space
    chapterOneProblemThreeBruteForceSolution: string => {
        let newString = '';

        for (let i = 0; i < string.length; i++) {
            const currentCharacter = string.charAt(i);
            if (JSON.stringify(currentCharacter) === JSON.stringify(' ')) {
                newString += '%20';
            } else {
                newString += currentCharacter;
            }
        }

        return newString;
    },
};
