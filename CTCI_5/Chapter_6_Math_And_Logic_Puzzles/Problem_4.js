/*
    There are three ants on different vertices of a triangle. What is the probability of collision (between any two or all of them) if they start walking on the sides of the triangle? Assume that each ant randomly picks a direction, with either direction being equally likely to be chosen, and that they walk at the same speed.

    Similarly, find the probability of collision with n ants on an n-vertex polygon.
*/

// CORRECT NO REDO
/*
    There are two possibilites for not having a collision, both of them involving all of them walking in the same direction. Either they all start walking clockwise, or they all start walking counterclockwise. The probability that either one will happen is (0.5 * 0.5 * 0.5), which is 0.125. Combine two chances together and it becomes 0.25. 1 - 0.25 = 0.75 is the probability that there will be a collision.

    Extending this argument to an n-vertex polygon, the chance that there will not be any collisions is when all ants walk in the same direction. The chance of this happening on a n-vertex polygon is (2 * 0.5^n), and thus the chance of a collision on an n-vertex polygon is 1 - (2 * 0.5^n).
*/
