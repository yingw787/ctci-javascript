/*
    Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of them share the same row, column, or diagonal. In this case, 'diagonal' means all diagonals, not just the two that bisect the board.
*/

/*
    For each space in a row, plant a queen and recurse with queens - 1, the next row, and the existing board. Every solution is unique because each queen goes onto a new row.

    REDO WITH CODE
*/
