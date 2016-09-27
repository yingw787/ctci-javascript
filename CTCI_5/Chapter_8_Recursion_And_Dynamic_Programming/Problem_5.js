/*
    Write a function to multiply two numbers without using the * operator. You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.
*/

/*
    Given a number A and B, calculate the result A * B using recursion.

    The result is simply A added B times.

    One method to do this is to write a recursive function that starts at zero and adds A B times.
    if either A or B is negative, flip the sign at the end.
    return the result.

    O(N) time, N = multiplier.
    O(N) space N = multiplier.

    A bit shift to the left is in essence doubling the value.

    The below would be equivalent to shifting a bitwise 9 three times to the left.
    8 * 9 = 2 * (4 * 9) = 2 * 2 * (2 * 9)

    The below would be equivalent to shifting a bitwise 1 six times to the left.
    8 * 8 = (2 * 2 * 2 * 2 * 2 * 2).

    So another method of calculating this sum would be to find all the powers of two of each multiplier, factor them out by shifting left one bit while modulus is 0 and record their number, calculate the result from the operation, and shift the result right by the number of 2s.

    O(N) time, N = multiplier
    O(N) space, N = multplier

    REDO DOESN'T WORK WHEN A AND B ARE BOTH PRODUCTS OF ODD NUMBERS
    REDO SOLUTION IS log(S) time, S is smaller number
*/
