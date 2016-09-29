/*
    Given an input file with four billion non-negative integers, provide an algorithm to generate an integer that is not contained in the file. Assume you have 1GB of memory available for this task.

    FOLLOW UP

    What if you have only 10MB of memory? ASsume that all the values are distinct and we now have no more than one billion non-negative integers.
*/

/*
    Divide the input file into chunks of 500MB. Save the chunks into the hard drive.
    Create a bit vector. For every number that is present within the file, shift a 1 bit into the index representing the integer. Do this for all the numbers in the chunk. Mark the chunk as visited.
    Bring up another chunk from the hard drive that is not visited. Add the numbers into the chunk.
    Repeat for all chunks.
    Whatever index is 0 in the bit vector is a safe choice.
    Follow up solution is this but smaller.

    REDO specify sizes of bit vector and make follow up not the above solution.
*/
