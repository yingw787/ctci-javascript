/*
    There is a building with 100 floors. If an egg drops from the Nth floor or above, it will break. If it's dropped from any floor below, it will not break. You're given two eggs. Find N, while minimizing the number of drops for the worst case.
*/

// REDO (ON THE RIGHT TRACK)
/*
    The brute force method would be to start from the first floor and drop the egg, then move to the second floor and drop the egg, and so on until the egg breaks, which tells you which floor it will break on.

    An improved method would be to start from the first floor and drop the egg, then move to the third floor and drop the egg, and so on until the egg breaks. Then take the second egg and drop it from the floor beneath the former floor. If the second egg breaks, N is the floor where the second egg dropped, if it doesn't, N is the floor where the first egg dropped.
*/
