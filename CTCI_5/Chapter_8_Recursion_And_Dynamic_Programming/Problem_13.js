/*
    You have a stack of n boxes, with widths w_i, heights h_i, and depths d_i. The boxes cannot be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height, and depth. Implement a method to compute the height of the tallest possible stack. The height of a stack is the sum of the heights of each box.
*/

/*
    Assume box is an object with width, height, and depth property.

    function _boxOneIsStrictlyLargerThanBoxTwo(boxOne, boxTwo) {
        return boxOne.width > boxTwo.width && boxOne.height > boxTwo.height && boxOne.depth > boxTwo.depth;
    }

    NOTE: Just because we have a list of all the boxes doesn't mean that we can stack them all! However, the solution would use every box possible, because less boxes means at most the same height as the solution and worst and general case less height.

    Sort the list of boxes (ascending or descending order) in terms of stackability.

    Call Math.max(recursive function with an empty Stack, array of sorted boxes, and height 0).

    Recursive function: If stack.peek is smaller than any of the boxes within the array, return the height.
    Check to see which box is the largest that can be stacked. Splice the array up to that point, add that box to the stack, increment the height, and recurse.

    REDO CODE OUT THE SOLUTION ESPECIALLY SORTING FUNCTION
*/
