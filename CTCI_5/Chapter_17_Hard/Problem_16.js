/*
    A popular masseuse receives a sequence of back-to-back appointment requests and is debating which ones to accept. She needs a 15-minute break between appointments and therefore she cannot accept any adjacent requests. Given a sequence of back-to-back appointment requests (all multiples of 15 minutes, no overlap, and none can be moved), find the optimal (highest total booked minutes) set the masseuse can honor. Return the number of minutes.

    EXAMPLE

    Input: [30, 15, 60, 75, 45, 15, 15, 45]
    Output: 180 minutes (30, 60, 45, 45)
*/

/*
    BRUTE FORCE METHOD

    At any index, you have the choice to increment sum or skip (unless predetermined skip is forced).
    Recurse over all possible solutions. Return the maximum sum possible.

    O(2^N) time
    O(N) space (CORRECTED FROM O(2 ^ N))
*/

/*
    BOOK SOLUTION

    Check the best solution for the entire array by looking at the tail end, and merging as you work your way to the beginning.
    Additionally, each array's computation is only relevant up to a point. Given any index i, we only need to know the best value from i + 1 and i + 2.
    O(N) time, O(1) space.
*/
