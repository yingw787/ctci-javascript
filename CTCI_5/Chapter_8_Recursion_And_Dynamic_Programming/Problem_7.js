/*
    Write a method to compute all permutations of a string of unique characters.
*/

/*
    Take examples:

    a --> [a] is the only permutation.

    ab --> [ab, ba] permutations.

    abc --> [
            abc, bca, cab,
            bac, acb, cba,
        ] permutations.

    Note how the first three are rotations of the original string, and the fourth and the fifth are rotations of the fourth, which is the original with a and b swapped.

    abcd --> [
                abcd, bcda, cdab, dabc, // ORIGINAL ROTATIONS
                bacd, acdb, cdba, dbac, // SWAP A AND B
                cbad, badc, adcb, dcba, // SWAP A AND C
                dbca, bcad, cadb, adbc, // SWAP A AND D
                acbd, cbda, bdac, dacb, // SWAP B AND C
                adcb, dcba, cbad, badc, // SWAP B AND D
                abdc, bdca, dcab, cabd, // SWAP C AND D
            ] permutations.

    REMOVE DUPLICATES:

    abcd --> [
                abcd, bcda, cdab, dabc, // ORIGINAL ROTATIONS
                bacd, acdb, cdba, dbac, // SWAP A AND B
                cbad, badc, adcb, dcba, // SWAP A AND C
                dbca, bcad, cadb, adbc, // SWAP A AND D
                acbd, cbda, bdac, dacb, // SWAP B AND C
                EMPTY, EMPTY, EMPTY, EMPTY, // SWAP B AND D
                abdc, bdca, dcab, cabd, // SWAP C AND D
            ] permutations.

    So, swap each letter in the string with every letter in the string after it except the last letter, and record all rotations of that string. Remove duplicates. Return array.

    For a string of n unique characters, there are going to be n! unique permutations.

    REDO, CORRECT ALGORITHM HAS NO REMOVAL OF DUPLICATES AND RUNS IN O(N!) TIME.
*/
