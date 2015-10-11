/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var gameOfLife = function(board) {
    if (!board) return

    board.forEach(function(row, i) {
        row.forEach(function(cell, j) {
            to(board, cell, i, j)
        })
    })

    board.forEach(function(row, i) {
        row.forEach(function(cell, j) {
            from(board, cell, i, j)
        })
    })
};

function to(board, state, i, j) {
    var counter = 0

    if (alive(board, i-1,j-1)) counter++
    if (alive(board, i,j-1)) counter++
    if (alive(board, i+1,j-1)) counter++
    if (alive(board, i-1,j)) counter++
    if (alive(board, i+1,j)) counter++
    if (alive(board, i-1,j+1)) counter++
    if (alive(board, i,j+1)) counter++
    if (alive(board, i+1,j+1)) counter++

    if (state === 1) {
        if (counter < 2 || counter > 3) board[i][j] = '1-0'
        else                            board[i][j] = '1-1'
    } else {
        if (counter === 3) board[i][j] = '0-1'
        else               board[i][j] = '0-0'
    }
}

function from(board, state, i, j) {
    if (state[2] === '0') state = 0
    if (state[2] === '1') state = 1
    board[i][j] = state
}

function alive(board, i, j) {
    if (!board[i]) return false

    return board[i][j] === 1 || (board[i][j] && board[i][j][0] === '1')
}
