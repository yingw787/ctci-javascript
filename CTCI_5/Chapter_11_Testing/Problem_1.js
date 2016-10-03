/*
    Find the mistake(s) in the following code:

    unsigned int i;
    for (i = 100; i >= 0; --i)
        printf("%d\n", i);
*/

// TODO: REVIEW
/*
    no braces for the for loop; important for Java (THIS IS NOT IT)
    i becomes -1, but this is not possible for an unsigned integer, so it is likely to wrap around and become 2^32.
    \n is supposed to be %n.
*/

/*
    BOOK SOLUTION
    i > 0, not i >= 0. Otherwise for loop will loop indefinitely.
    use %u instead of %d, as need to print unsigned int.
*/
