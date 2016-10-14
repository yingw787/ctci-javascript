/*
    Numbers are randomly generated and passed to a method. Write a program to find and maintain the median value as new values are generated.
*/

/*
    BRUTE FORCE METHOD

    Store all values in an hashmap mapping the value to the frequency of it occuring. Set the median according to the first value, and record how many values are smaller and greater than it. If there is an imbalance of values greater than 1, move towards either the lesser or greater depending on which one is greater. Update the smaller and greater, along with the new median, from the hashmap.

    O(1) time
    O(N) space, N = number of values generated
*/

/*
    Use two heaps: One heap stores the max of values less than the median, and one heap stores the min of the values greater than the median.

    if maxHeap.size() > minHeap.size(), maxHeap.top() will be the median.
    if maxHeap.size() === minHeap.size(), (maxHeap.top() + minHeap.top()) / 2 will be the median.

    When a value is added, it is either added to the minHeap if it is greater than the median, added to the maxHeap if the value is less than or equal to the median. Update the median.

    O(log N) time for update, N = number of values generated
    O(1) time for computing median
    O(N) space, N = number of values generated
*/
