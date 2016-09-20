/*
    Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).
*/
'use strict';

const assert = require('assert');

module.exports = {
    // O(N) time
    // O(N) space
    chapterOneProblemSixBruteForceSolution: toBeCompressedInput => {
        assert(typeof toBeCompressedInput === 'string');

        let compressedInput = '';
        for (let i = 0; i < toBeCompressedInput.length; i++) {
            const currentCharacter = toBeCompressedInput.charAt(i);
            let count = 1;
            while (i < toBeCompressedInput.length) {
                const nextCharacter = toBeCompressedInput.charAt(i + 1);
                if (JSON.stringify(nextCharacter) !== JSON.stringify(currentCharacter)) {
                    break;
                } else {
                    count++;
                    i++;
                }
            }
            compressedInput += currentCharacter + count;
        }
        if (compressedInput.length > toBeCompressedInput.length) {
            return toBeCompressedInput;
        }
        return compressedInput;
    },
};
