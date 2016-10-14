/*
    Imagine you have a square matrix, where each cell (pixel) is either black or white. Design an algorithm to find the maximum subsquare such that all four borders are filled with black pixels.
*/

/*
    BRUTE FORCE SOLUTION

    Check whether the original matrix has all black borders. If it is, return the size of the array.
    Else, return the max of the top left subsquare (remove the bottom row and rightmost column), the top right subsquare (remove the bottom row and leftmost column), the bottom left subsquare (remove the top row and rightmost column), and the bottom right subsquare (romev the top row and leftmost column).

    O(4 ^ N) time, N = length of square; need to check four alternatives at every recursive call.
    O(N) space, maximum depth of the stack.
*/

/*
    BOOK SOLUTION

    TODO: REVIEW
*/
