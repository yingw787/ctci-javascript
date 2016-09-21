/*
    You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once.
*/

// REVIEW THIS PROBLEM

/*
    You need to measure all of the pills or almost all of the pills, since if you skip two or more bottles you may miss the heavy bottle and not know which.

    Take 1 pill from the first bottle, 2 from the second, ..., 20 from the last bottle, and put them on the scale. whatever the decimal number is for the weight of the pills in total is the index of the bottle in the array of bottles.
*/
