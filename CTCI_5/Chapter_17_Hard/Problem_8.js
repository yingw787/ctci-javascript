/*
    A circus is designing a tower routine consisting of people standing atop one another's shoulders. For practical and aesthetic reasons, each person must be both shorter and lighter than the person below him or her. Given the heights and weigths of each person in the circus, write a method to compute the largest possible number of people in such a tower.
*/

/*
    BRUTE FORCE SOLUTION

    Strictly sort the elements by height and weight, and toss out elements that cannot be strictly sorted.

    Strict sort:
    Create an empty array (or linked list in java).
    Traverse the array in order to find whether an element can be spliced in.
    If it can, splice it in.
    If not, toss it out.

    All elements should be sorted and valid. Return the array.

    O(N * N) time, N is size of array
    O(N) space
    TODO: REVIEW O(N * log N) algorithm does exist but it takes significantly more code to do so
*/
