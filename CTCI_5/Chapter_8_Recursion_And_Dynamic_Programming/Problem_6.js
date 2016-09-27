/*
    In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one). You have the following constraints:

    (1) Only one disk can be moved at a time.
    (2) A disk is slid off the top of one tower onto the next tower
    (3) A disk can only be placed on top of a larger disk.

    Write a program to move the disks from the first tower to the last using stacks.
*/

/*
    Manually calculate how to do this by hand for 1 disk, 2 disks, and 3 disks.

    Pattern emerges:
    Move (pile - disk to be moved) to furthest tower.
    Move disk to be moved to middle tower.
    Move (pile - disk to be moved) to original tower.
    Move disk to be moved to furthest tower.
    Move (pile - disk to be moved) to furthest tower.
    Repeat as necessary for further disks, with (pile - disk to be moved) being the pile + 1.

    CORRECT NO REDO
*/
