/*
    Design an algorithm to find the smallest K numbers in an array.
*/

/*
    BRUTE FORCE SOLUTION:

    sort the array by ascending order. Then traverse the array in order to find the smallest K numbers. Return null if array.length < K, otherwise return subarray.

    O(N log N) time, N = size of array.
    O(K) space, K = K
    REDO O(N) time and O(1) space, look up selection rank algorithm for elements that are not unique.
*/
