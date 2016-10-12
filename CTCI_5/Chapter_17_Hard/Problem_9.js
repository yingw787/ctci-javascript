/*
    Design an algorithm to find the kth number such that the only prime factors are 3, 5, and 7. Note that 3, 5, and 7 do not have to be factors, but it should not have any other prime factors. For example, the first several multiples would be (in order) 1, 3, 5, 7, 9, 15, 21.
*/

/*
    BRUTE FORCE SOLUTION

    Calculate factors for every number from 0; if 3 and/or 5 and/or 7 are the only prime factors, push into array. If there are k - 1 elements (example counts 1 as multiple), then return end of array.

    Instead of array, increment a counter.

    IMPROVED BRUTE FORCE algorithm

    Value is (7 ^ a) * (5 ^ b) * (3 ^ c).
    Generate values for all combinations of 0 <= a <= k, 0 <= b <= k, 0 <= c <= k. Sort them, and then calculate the kth value.

    IMPROVED SOLUTION

    Use a binary min heap and a set.
    Insert 1 into heap.
    While set.length < k
    Remove element from heap; add element to set; multiply element by 3x, 5x, and 7x, and insert those values into the heap.
    Return the last value in the array as the kth value.

    O(?) time (some values might be duplicates?)
    O(N) space, N = k
    TODO: REVIEW
*/
