/*
    Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).
*/
'use strict';

const assert = require('assert');

// O(N) time
// O(N) space
// CORRECT NO REDO
function chapterOneProblemSixBruteForceSolution(uncompressedInput) {
    assert(typeof uncompressedInput === 'string');

    let compressedInput = '';
    for (let i = 0; i < uncompressedInput.length; i++) {
        const currentCharacter = uncompressedInput.charAt(i);
        let count = 1;
        while (i < uncompressedInput.length) {
            const nextCharacter = uncompressedInput.charAt(i + 1);
            if (JSON.stringify(nextCharacter) !== JSON.stringify(currentCharacter)) {
                break;
            } else {
                count++;
                i++;
            }
        }
        compressedInput += currentCharacter + count;
    }
    if (compressedInput.length > uncompressedInput.length) {
        return uncompressedInput;
    }
    return compressedInput;
}

module.exports = {
    chapterOneProblemSixBruteForceSolution: chapterOneProblemSixBruteForceSolution,
};
