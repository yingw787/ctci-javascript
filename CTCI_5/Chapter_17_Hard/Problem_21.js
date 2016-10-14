/*
    Imagine a histogram (bar graph). Design an algorithm to compute the volume of water it could hold if someone poured water over the top. You can assume that each histogram bar has width 1.

    Example (LOOK AT GRAPH)

    Input: [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
    Output: 26
*/

/*
    BRUTE FORCE SOLUTION

    Find the tallest bar in the graph, in addition to the tallest bars on the left and on the right.
    The volume of water between the tallest bar and the tallest bar on the left is the amount of space between the bars multiplied by the height of the bar, and subtract any bars in the middle. Repeat with tallest bar on the right.
    Recurse, set the tallest bar on the left as the tallest bar, and add only the water from the updated tallest bar on the left. Repeat with the tallest bar on the right.
    Return the value of the water volume when either the bar is at either end of the array.

    ANOTHER BRUTE FORCE SOLUTION

    The height of the water at each index is the minimum of the tallest bar at the left of the index and the tallest bar at the right of the index. The amount of water at each index is the difference between the height of the water and the height of the bar at the index, or zero if the height of the bar is greater than the height of the water.
    Traverse the array, rally up a running sum of the water volume, and return the value when the array has been fully traversed.

    O(N * N) time, N = length of the array
    O(1) space

    IMPROVED SOLUTION

    Initialize an array the size of the reference array.
    Traverse the reference array from left to right, and store the running maximum of the reference array in the initialized array.
    Traverse the reference array from right to left, and store the running maximum of the reference array in the initialized array.

    EXAMPLE:

    Input: [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
    Initialized input after pass one: [[0], [0], [4], [4], [4], [6], [6], [6], [6], [6], [6], [6], [6], [6], [6], [6]]
    Initialized input after pass two: [[0, 6], [0, 6], [4, 6], [4, 6], [4, 6], [6, 6], [6, 5], [6, 5], [6, 5], [6, 5], [6, 5], [6, 1], [6, 1], [6, 0], [6, 0], [6, 0]]
    Repeat the procedure as with the brute force solution.

    O(N) time, N = length of the array
    O(N) space

    CORRECT NO REDO
*/
