/*
    A majority element is an element that makes up more than half of the items in an array. Given a positive integers array, find the majority element. If there is no majority element, return -1. Do this in O(N) time and O(1) space.
*/

/*
    BRUTE FORCE SOLUTION WITHOUT O(N) time and O(1) space
    Add array to hashmap mapping value to frequency, return value with highest frequency

    BRUTE FORCE SOLUTION IN O(N * N) time and O(1) space
    Know that there is only going to be one element that is the majority element.
    For each element, count whether the number of non-matching elements is strictly greater than the number of matching elements.
    If it is, then return that value.
    If get to the end and not found, return -1.

    BRUTE FORCE SOLUTION IN O(N * log N) time and O(1) space
    Take the length of the array, divide it by 2 and add one to get the minimum majority threshold.
    Sort the array.
    Traverse the array with a counter for each element type; every time a new element starts, check to see whether the counter has hit the minimum threshold, and if so, return the element. Otherwise, overwrite the element, reset the counter to zero, and continue traversing. If it is not a new element, increment the counter.

    If hit the end, then it hasn't returned, and return -1.

    UNABLE TO FIND SOLUTION IN O(N) time and O(1) space
*/

/*
    BOOK SOLUTION

    Traverse the array. Check each subarray for validating the majority element is the first element of the subarray. Terminate upon that not being the case. If a subarray element is a majority element, validate it across the entire array. If multiple subarray elements are majority elements within their subarray, choose the one that has the largest subarray size.

    // TODO: REVIEW
*/
