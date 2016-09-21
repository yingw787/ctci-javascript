/*
    There are 100 closed lockers in a hallway. A man begins by opening all 100 lockers. Next, he closes every second locker. Then on this third pass, he toggles every third locker (closes it if it is open or opens it if it is closed). This process continues for 100 passes, such that on each pass i, the man toggles every ith locker. After his 100th pass in the hallway, in which he toggles only locker #100, how many lockers are open?
*/

// REDO (ON THE RIGHT TRACK)
/*
    The first locker is toggled once. (Round 1)
    The second locker is toggled twice. (Round 1 and 2)
    The third locker is toggled twice. (Round 1 and 3)
    The fourth locker is toggled three times. (Rounds 1, 2, and 4)
    The fifth locker is toggled twice. (Round 1 and 5)
    The sixth locker is toggled four times. (Rounds 1, 2, 3, 6)

    The nth locker is toggled number_of_factors_of_n_inclusive times.

    So to calculate how many lockers are open:
    For all lockers 1 to 100 inclusive:
        Check number_of_factors_of_n_inclusive
        If result is odd, increment numberOfLockersOpen
    Return numberOfLockersOpen
*/
