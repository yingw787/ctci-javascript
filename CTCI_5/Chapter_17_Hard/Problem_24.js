/*
    Given an NxN matrix of positive and negative integers, write code to find the submatrix with the largest possible sum.
*/

/*
    BRUTE FORCE SOLUTION

    Recurse through all possible submatrixes while keeping track of the maximum value. When the matrix becomes only one square, return the recorded maximum value. Take the maximum of all returned values and return as final result.

    O(4 ^ N) time, N = length of side of matrix
    O(1) space

    IMPROVED SOLUTION

    Precompute the size of a matrix before recursing. Compute the sum of the submatrix starting at the top left corner and ending in every particular cell. In order to compute the sum of any particular submatrix, add the sum at the bottom rightmost cell, subtract the sum at the bottom rightmost cell closest to the left side of the submatrix (if it exists), subtract the sum at the top rightmost cell closest to the top side of the submatrix (if it exists), and add the sum at the diagonal closest to the top leftmost cell. O(1) computation time.

    O(4 ^ N) time, N = length of side of matrix
    O(N * N) space, N = length of side of matrix

    BEST SOLUTION

    We only want to include negative values if the submatrix components they join together are greater than the negative values.
    For each assumed size of the matrix from 1 to N,
    for each position that nxn submatrix can be in the NxN matrix,
    compute the sum from the precomputed matrix. If the sum is less than 0, update the sum to 0. If the sum is greater than maxsum, update maxsum to be sum (and the locations of the corners, if need be).
    Return the maximum sum (and the submatrix from the locations of the corners, if need be).

    O(N * N) time, N = length of side of matrix
    O(N * N) space, N = length of side of matrix
*/

/*
    BOOK SOLUTION
    TODO: REVIEW
*/
