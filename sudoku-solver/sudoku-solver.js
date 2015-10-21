/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board, 0)
};

function solve(board, position) {
    if (position === 81) return true

    var i = Math.floor(position / 9),
        j = position % 9

    if (board[i][j] !== '.') return solve(board, position + 1)

    var valids = validate(board, i, j)

    var p

    for (p = 1; p < valids.length; p++) {
        // number p is valid
        if (valids[p]) {
            board[i][j] = String(p)
//             board[i] = replace(board[i], j, String(p))

            if (solve(board, position + 1)) return true
        }
    }

    // no solution , restore it and exit
    board[i][j] = '.'
//     board[i] = replace(board[i], j, '.')

    return false
}

function replace(line, j, t) {
    var ret = line.split('')

    ret.splice(j, 1, t)

    return ret.join('')
}

function validate(board, i, j) {
    var ret = [true, true, true, true, true, true, true, true, true, true]

    var p,
        r = 3 * Math.floor(i / 3),
        c = 3 * Math.floor(j / 3)

    for (p = 0; p < 9; p++) {
        // col
        if (board[i][p] !== '.') ret[+board[i][p]] = false
        // row
        if (board[p][j] !== '.') ret[+board[p][j]] = false
        
        if (board[r + Math.floor(p / 3)][c + p % 3] !== '.')
            ret[+board[r + Math.floor(p / 3)][c + p % 3]] = false
    }

    return ret
}
