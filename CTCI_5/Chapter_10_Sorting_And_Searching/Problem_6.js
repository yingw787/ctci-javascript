/*
    Image you have a 20GB file with one string per line. Explain how you would sort the file.
*/

/*
    Since every line in the file holds only one string, it make it easy to parallelize.
    Assuming that the string is encoded in UTF-8, that means each string takes a maximum of 4 bytes, or 32 bits.
    Assuming that each string is maxed to 4 bytes, that means there are roughly 5 billion strings to sort.

    Divide the file into say 1 million files, each with about 5000 strings. Use a parallelized mergesort algorithm to sort them all and merge them back into one file.
*/

/*
    MISSED ASSUMPTION: don't bring all the data into memory, since 20GB is too big.
    Divide the file into chunks, x MB each, where x is the amount of memory available. Sort each chunk separately and save it back into the file system.
    Once all chunks are sorted, merge the chunks. Then you have a sorted file.
    THIS IS CALLED EXTERNAL SORT.
*/
