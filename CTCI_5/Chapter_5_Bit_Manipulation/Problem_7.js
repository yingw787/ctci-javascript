/*
    Write a program to swap odd and even bits in an integer with as few instructions as possible (e.g. bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).
*/

/*
    Make sure that the size of the sequence is even.

    for the size of the sequence:
        look ahead to the next bit. Check whether you need to flip the current bit. If so, set temporary variable didFlip to true. Move to the next variable.
        if didFlip is true, flip the current bit and set didFlip to false. Else, do nothing and move onto the next variable.
        iterate by two.

    THIS IS BRUTE FORCE SOLUTION, REDO PROBLEM
*/
