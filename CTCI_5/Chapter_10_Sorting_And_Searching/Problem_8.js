/*
    You have an array with all the numbers from 1 to N, where N is at most 32,000. THe array may have some duplicate entries and you do not know what N is. With only 4 kilobytes of memory available, how would you print all duplicate elements in the array?
*/

// TODO: REVIEW
/*
    4 kilobytes is 4000 bytes, which is 32000 bits.
    Create a bit vector that is 32000 bits long (this could be an int[] that is of length 1000).
*/

/*
    BOOK SOLUTION
    Apparently GLM says that 4 kilobytes is 4 * 8 * 2^10 bits? (YES IT IS, 2^10 is 1024 bits, NOT 1000 bits).
    Create a bit vector that is 32000 bits long. For each value, if it appears, flag the bit index. If it appears again, print out the value.
*/
