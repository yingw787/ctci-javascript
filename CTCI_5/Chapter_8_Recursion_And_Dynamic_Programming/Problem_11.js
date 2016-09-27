/*
    Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), pennies (1 cent), write code to calculate the number of ways of representing n cents.
*/

/*
    BRUTE FORCE METHOD: Initialize an object that maps each type of coin with its number of cents value. Start with a regular function that calls a recursive function with the number of cents so far, a sum of zero, and a hashmap. Write a recursive method that checks whether the amount of cents is equal to the target number of cents (and returns the hashmap if it is), pushes the coin chosen into the memo (which is a hashmap of coin and frequency), and update the number of cents. Recurses with the different options of coins. Remove duplicates.

    IMPROVED METHOD: Use the largest value coins to generate n cents. Then, begin replacing the coins with all varieties of their coins of lesser value.

    e.g.

    n = 1
    [
        [1],
    ]

    n = 5
    [
        [5],
        [1, 1, 1, 1, 1],
    ]

    n = 10
    [
        [10],
        [5, 5],
        [1, 1, 1, 1, 1, 5],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]

    n = 25
    [
        [25],
        [10, 10, 5],
        [10, 10, 1, 1, 1, 1, 1],
        [10, 5, 5, 1, 1, 1, 1, 1],
        [10, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
        [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]

    In order to avoid duplicates, make sure if there are duplicate coins within the previous arrangement of coins, to split them one at a time fully.

    REDO WRONG APPROACH
*/
