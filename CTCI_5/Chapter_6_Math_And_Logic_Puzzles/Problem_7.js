/*
    In the new post-apocalyptic world, the world queen is desperately concerned about the birth rate. Therefore, she decrees that all families should ensure that they have one girl or else they face massive fines. If all families abide by this policy - that is, they have continue to have children until they have one girl, at which point they immediately stop - what will the gender ratio of the new generation be? (Assume that the odds of someone having a boy or a girl on any given pregnancy is equal). Solve this out logically and then write a computer simulation of it.
*/

// CORRECT NO REDO
/*
    Assume that there are n couples, each of which give birth to one child of either gender in equal probability every cycle.

    BOYS: 0
    GIRLS: 0

    Cycle = 1: Every couple has a child. n/2 couples have a boy, n/2 couples have a girl. All girl couples stop procreating.
    BOYS: n/2
    GIRLS: n/2

    Cycle = 2: All boy couples have a child. n/4 couples have a boy, n/4 couples have a girl. All girl couples stop procreating.
    BOYS: n/2 + n/4
    GIRLS: n/2 + n/4

    Cycle = i: All boy couples have a child. n/2^i couples have a boy, n/2^i couples have a girl.
    BOYS: n/2 + n/4 + ... + n/2^i
    GIRLS: n/2 + n/4 + ... + n/2^i

    RATIO SHOULD BE THE SAME
*/
