/*
    Implement an algorithm to print all valid (e.g. properly opened and closed), combinations of n pairs of parentheses.
*/

/*
    NOTE: There is ordering of the results possible.
    NOTE: Parentheses can be nested within each other, or they could not.

    1 pair of parentheses --> ()
    2 pairs of parentheses --> (()), ()()
    3 pairs of parentheses --> ((())), (()()), (())(), ()(()), ()()()

    BRUTE FORCE: For each additional pair of parentheses, you can either insert to the left of the previous solution, inside the previous solution, or to the right of the previous solution. Then remove duplicates.
    IMPROVED: Use memoization in order to check for the result before inserting it into the memo in order to reduce the number of duplicates. Use a hash table outside the recursive method in order to check for duplicates.

    IMPROVED: Alternatively, insert a parenthese to the left and a parenthese to the right of the solution in order to get unique values.

    REDO CODE OUT THE PROBLEM
*/
