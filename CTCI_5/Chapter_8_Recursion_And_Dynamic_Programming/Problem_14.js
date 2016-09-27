/*
    Given a boolean expression consisting of the symbols 0 (false), 1 (true), & (AND), | (OR), and ^ (XOR), and a desired boolean result value result, implement a function to count the number of ways of parenthesizing the expression such that it evaluates to result.

    EXAMPLE

    countEval("1^0|0|1", false) -> 2
    countEval("0&0&0&1^1", true) -> 10
*/

/*
    Parentheses must always be placed around a valid operation that returns a value.
    (^) not a thing, (1^0) is, so is ((1^0)^0).

    Take a base case:
    '1', false -> 0, no valid ways
    '1', true -> 1, (1)
    '1&1', true -> 1, (1&1)
    '1&1&0', false -> 3, (1&1)&0, 1&(1&0), (1&1&0)
    '1&1&0', true -> 0

    Recursive method to find all valid ways of parenthesizing the operation without incurring duplicates. If the operation returns the desired value, increment a counter. When there are no more possible ways of recursing, return the counter.

    REDO WITH CODE; TRY MEMOIZATION
*/
