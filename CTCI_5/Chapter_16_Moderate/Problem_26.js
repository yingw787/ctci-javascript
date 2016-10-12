/*
    Given an arithmetic equation consisting of positive integers, +, -, *, and / (no parentheses), compute the result.

    EXAMPLE

    Input: 2 * 3 + 5 / 6 * 3 + 15
    Output: 23.5
*/
'use strict';

// GIVEN UP
// REDO WITH CODE

/*
    BOOK SOLUTION

    You can still process the expression from left to right, just make sure to compute the result directly when you encounter a multiply or a divide operation. Keep a running list of the operator and the number being processed, as well as the result. Process results directly if multiply or divide is encountered, otherwise process with result.

    Alternative approach is to use a number and an operator stack, and to compute the operation and push it back in if the operation priority is greater than the one below it.

    READ SOLUTION FOR MORE DETAILS
*/
