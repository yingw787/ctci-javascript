/*
    You have 1000 bottles of soda, and exactly one is poisoned. You have 10 test strips which can be used to detect poison. A single drop of poison will turn the test strip positive permanently. You can put any number of drops on a test strip at once and you can reuse a test strip as many times as you'd like (as long as the results are negative). However, you can only run tests once per day and it takes seven days to return a result. How would you figure out the poisoned bottle in as few days as possible?

    FOLLOW UP

    Write code to simulate your approach.
*/

// REDO (TRY DIFFERENT APPROACH) (MINIMUM NUMBER OF DAYS 7)
/*
    KEY: You can put any number of drops on a test trip at once.
    KEY: Fastest way to solve this is to use all the usable test strips at once.

    NUMBER_OF_USABLE_TEST_STRIPS: 10

    Week 1: Divide 1000 bottles by 10 test strips. Put 100 unique drops on each test strip.
    One bucket will return positive. Throw out 900 bottles of negative bottles and one positive test strip.

    NUMBER_OF_USABLE_TEST_STRIPS: 9

    Week 2: Divide 100 bottles by 9 test strips. Put 11 unique drops on 8 test strips and 12 unique drops on one test strip.
    One bucket will return positive. Throw out the negative bottles and one positive test strip.

    NUMBER_OF_USABLE_TEST_STRIPS: 8

    Week 3: Divide 12 bottles by 8 test strips. Put one drop on 4 test strips and 2 drops on 4 test strips.
    One bucket will return positive. Throw out the negative bottles and one positive test strip.
    If one drop test strip is positive, return that bottle. Otherwise, continue.

    NUMBER_OF_USABLE_TEST_STRIPS: 7

    Week 4: Divide 2 drops by 7 test strips. Put two drops on two test strips.
    Return the strip that has returns positive.

    NUMBER OF DAYS: 28
*/
