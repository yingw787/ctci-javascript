/*
    You have a basketball hoop and someone says that you can play one of two games.

    Game 1: You get one shot to make the hoop.

    Game 2: You get three shots and you have to make two of three shots.

    If p is the probability of making a particular shot, for which values of p should you pick one game or the other?
*/

// TODO: REVIEW
/*
    Probability of winning Game 1 is P(make shot one) = p.
    Probability of winning Game 2 is P(make shot one, make shot two, miss shot three) + P(make shot one, miss shot two, make shot three) + P(miss shot one, make shot two, make shot three) + P(make shot one, make shot two, make shot three)

    = 3 * (p * p * (1 - p)) + p ^ 3.
    = 3 * (p ^ 2 - p ^ 3) + p ^ 3
    = - 2 * p ^ 3 + 3 * p ^ 2.

    Check when the probabilities are equal according to quadratic formula.

    -2p^3 + 3p^2 = p;
    -2p^3 + 3p^2 - p = 0;
    -2p^2 + 3p - 1 = 0;

    p = 0.5 is the tipping point.

    if p is 0.6, -2(0.6)^3 + 3(0.6)^2
    = 3 * 0.36 + -2 * 0.216
    = 1.08 + (- 0.432)
    = 0.648

    If p > 0.5, choose Game 2
    If p < 0.5, choose Game 1

    // BOOK ANSWER
    0 < p < 0.5, choose Game 1
    0.5 < p < 1.0, choose Game 2
    if p = 0 || 0.5 || 1.0 it doesn't matter.
*/
