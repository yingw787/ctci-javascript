/*
    Given an M x N matrix in which each row and each column is sorted in ascending order, write a method to find an element.
*/

/*
    Brute force method would be to iterate through the entire matrix and compare each element to the requested element; if there is a match, return. O(M * N) time and O(1) space.

    Improved method:
    Do a binary search in each row for the value. O(M * log N) time and O(1) space.

    Improved method:
    Check the last row in the matrix, and the first row in the matrix. If the value in the last row in the matrix is smaller than the value, or if the value in the first row in the matrix is greater than the value, eliminate that column. There will only be one column that matches, unless there are duplicates (handle duplicates with a flag, and eliminate duplicate columns if flag). Do binary sarch in the column remaining. O(N * log M) time, O(1) space.

    Improved method:
    Complete binary search and find the first value in the first row that is greater than the value, and the first value in the last row that is smaller than the value. If the value in the last row in the matrix is smaller than the value, eliminate that column and the ones before it. If the value in the first row in the matrix is greater than the value, eliminate that column and all the ones before it. Check the remaining column with binary search for the value. O(log N * log M) time, O(1) space.

    Improved method:
    The smallest item will always be the one to the top left corner, while the largest item will always be in the bottom right corner. Therefore, start from the bottom right corner, and move diagonally up; as long as the value is smaller than the element, move the element up and to the left, and eliminate the previous row and column. Search the remaining row/column for the element. O(M + N) time, O(1) space.

    Improved method:
    Traverse the diagonal using binary search. And repeat the previous process. Eliminate a quarter of the matrix at a time. Search the remaining row/column for the element. O(log M + log N) time, O(1) space.
*/

/*
    CORRECT
    REDO WRITE CODE FOR THAT LAST METHOD, LOOK FOR ADDITIONAL OPTIMIZATION.
*/
