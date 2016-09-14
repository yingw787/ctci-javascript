/*
    Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).
*/
'use strict';

module.exports = {
    // O(N) time
    // O(N) space
    chapterOneProblemSixBruteForceSolution: toBeCompressedString => {
        let compressedString = '';
        for (let i = 0; i < toBeCompressedString.length; i++) {
            const currentCharacter = toBeCompressedString.charAt(i);
            let count = 1;
            while (i < toBeCompressedString.length) {
                const nextCharacter = toBeCompressedString.charAt(i + 1);
                if (JSON.stringify(nextCharacter) !== JSON.stringify(currentCharacter)) {
                    break;
                } else {
                    count++;
                    i++;
                }
            }
            compressedString += currentCharacter + count;
        }
        if (compressedString.length > toBeCompressedString.length) {
            return toBeCompressedString;
        }
        return compressedString;
    },
};
