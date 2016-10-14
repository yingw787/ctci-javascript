/*
    Given a string b and an array of smaller strings T, design a method to search b for each small string in T.
*/

/*
    BRUTE FORCE SOLUTION

    For each of the strings in T, search for the particular string in string b.
    O(T * B) time, T = length of array of smaller strings T, B is length of string b.
    O(1) space

    IMPROVED SOLUTION

    Take string b and add it and all substrings into a trie.
    For each of the smaller strings, search the trie for the string.
    If a successful termination is achieved, the string in T is in string b.

    O(B * B + K * T) time, B = length of string b, K = length of longest string in T, T = length of T (CORRECTED FROM O(B * B))
    O(B * B) space
*/

/*
    BOOK SOLUTION

    Traverse string b.
    Upon seeing that there characters in b that start off strings in t,
    Add it to the trie, and keep adding until there is a termination condition.
    At the termination condition, add the location where the string is found.
    Trie now contains locations of all strings present in T within b.

    O(K * T + K * B) time, B = length of string b, K = length of longest string in T, T = length of array T.
    O(T * K) space, T = length of array T, K = length of longest string in T.
*/
