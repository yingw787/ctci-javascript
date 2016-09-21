/*
    A monochrome screen is stored as a single array of bytes, allowing eight consecutive pixels to be stored in one byte. The screen has width w, where w is divisible by 8 (that is, no byte will be split across rows). The height of the screen, of course, can be derived from the length of the array and the width. Implement a function that draws a horizontal line from (x1, y) to (x2, y).

    The method signature should look something like:

    drawLine(byte[] screen, int width, int x1, int x2, int y)
*/

/*
    To get (x, y) given x and y:

    height = (screen.length() * 8) / width;
    y would be referenced in the byte array as a subarray starting from:
        total length of byte array - (y * height * width) and ending at:
        total length of byte array - (y * height * width) + width;

    x would be referenced in the byte array as x index in the subarray concatenated together.

    bits from x1 to x2 inclusive are set to 1.

    make a mask the length of x2 - x1 + 1 and position it in the subarray at index x1.

    REDO PROBLEM BECAUSE THIS IS HARD, NOT QUITE THE CORRECT ANSWER
*/
