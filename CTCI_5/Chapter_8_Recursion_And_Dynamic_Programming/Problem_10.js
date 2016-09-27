/*
    Implement the 'paint fill' function that one might see on many image editing programs. That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color, fill in the surrounding area until the color changes from the original color.
*/

/*
    WRAPPER FUNCTION
    Record the original color of the point. Begin recursive function.

    Check to see whether the point is within the screen. If it is not, return.

    Check to see whether the color of the point is the original color. If it is not, return.

    Change the color of the point to the desired color.

    Recurse for points (x + 1, y), (x + 1, y + 1), (x, y + 1), (x - 1, y + 1), (x - 1, y), (x - 1, y - 1), (x, y - 1), (x + 1, y - 1);

    REDO CODE OUT THIS PROBLEM, SEVERAL MISTAKES
*/
