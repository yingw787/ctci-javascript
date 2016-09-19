/*
    Explain what the following code does: ((n & (n - 1)) === 0).
*/

/*
    If n = 1:
    1 & 0 === 0: true

    If n = 2 (10):
    (10) & (2 - 1 = 1 (01)) === 0: true

    If n = 3 (11):
    (11) & (3 - 1 = 2 (10)) === 0: false

    If n = 4 (100):
    (100) & (4 - 1 = 3 (011)) === 0: true

    If n = 5 (101):
    (101) & (5 - 1 = 4 (100)) === 0: false

    If n = 6 (110):
    (110) & (6 - 1 = 5 (101)) === 0: false

    If n = 7 (111):
    (111) & (7 - 1 = 6 (110)) === 0: false

    If n = 8 (1000):
    (1000) & (8 - 1 = 7 (0111)) === 0: true

    This code tests whether n is a power of 2. (// EDIT OR ZERO)
*/
