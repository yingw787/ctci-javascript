/*
    You are given an array with all the numbers from 1 to N appearing exactly once, except for one number that is missing. How can you find the missing number in O(N) time and O(1) space? What if there were two numbers missing?
*/

/*
    BRUTE FORCE FOR PART ONE

    Sum the values in the array. Sum from 1 to N should be (N * (N + 1)) / 2. Difference between this sum and the actual sum is the missing value.

    BRUTE FORCE FOR PART TWO

    Sum the values in the array. Sum from 1 to N should be (N * (N + 1)) / 2. Difference between this sum and the actual sum is the sum a + b.
    Multiply the values in the array. Product from 1 to N should be N!, divide that by the actual product and the result is a * b.

    Substitute b = sum - a in for result, calculate positive a, then calculate positive b.
    Return a and b.

    CORRECT NO REDO
*/
