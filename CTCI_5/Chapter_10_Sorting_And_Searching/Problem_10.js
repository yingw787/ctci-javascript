/*
    Imagine you are reading in a stream of integers. Periodically, you wish to be able to look up the rank of a number x (the number of values less than or equal to x). Implement the data structures and algorithms to support these operations. That is, implement the method track(int x), which is called when each number is generated, and the method getRankOfNumber(int x), which returns the number of values less than or equal to x (not including x itself).

    EXAMPLE

    Stream (in order of appearances): 5, 1, 4, 4, 5, 9, 7, 13, 3
    getRankOfNumber(1) = 0
    getRankOfNumber(3) = 1
    getRankOfNumber(4) = 3
*/

/*
    Create a hash table, that maps the value streamed in to a counter of values smaller than or equal to it. When a value is streamed in that hasn't been seen before, it is added to the hash table. When the value is smaller than some values in the hash table, or is a duplicate value, the counters for the values larger than or equal to it are incremented. getRankOfNumber would therefore just read the counter value. track() is thus O(N log N) time (get the keys, sort them, and increment the counter in the hash table for them) and getRankOfNumber is O(1) time.
*/

/*
    REDO, with track being O(log N) time and getRankOfNumber being O(N) time.
*/
