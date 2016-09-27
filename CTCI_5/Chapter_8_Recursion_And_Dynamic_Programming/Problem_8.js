/*
    Write a method to compute all permutations of a string whose characters are not necessarily unique. The list of permutations should not have duplicates.
*/

/*

    BRUTE FORCE: COMPUTE ALL PERMUTATIONS USING METHOD DESCRIBED IN PROBLEM 7.

    a --> [a],
    b --> [b],

    aa --> [aa],
    ab --> [ab, ba],

    aaa --> [aaa],
    aab --> [aab, baa, aba],
    abc --> [
                abc, bca, cab,
                bac, acb, cba,
            ],

    aaaa --> [aaaa],
    aaab --> [aaab, baaa, abaa, aaba],
    aabc --> [],
    abcd --> [],

    The number of permutations possible in a string with n characters of type i is:
        ((SIGMA n_i) over i)! / (PI (n_i)! over i)

    TIMEOUT REDO
*/
