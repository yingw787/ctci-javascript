/*
    You are given two arrays, one shorter (with all distinct elements) and one longer. Find the shortest subarray in the longer array that contains all the elements in the shorter array. The items can appear in any order.

    EXAMPLE

    Input: [1, 5, 9] | [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7]
    Output: [7, 10] (the underlined portion above)
*/

/*
    BRUTE FORCE SOLUTION

    Find all sequences that contain one of each element in the input. Return the smallest one.

    BRUTE FORCE SOLUTION #2

    Observation: The subarray will be a part of the array (tautologically).
    Add the entire array into a hashmap, mapping keys to values. Make sure that at least one instance from all elements from the shorter array are present in the hashmap.
    Chop off values from both ends until there is only one instance of each element from the shorter array in the hashmap. Return the head and tail indices.

    O(N) time, N = length of longer array
    O(N) space
*/

/*
    BOOK SOLUTION

    TODO: REVIEW
*/
