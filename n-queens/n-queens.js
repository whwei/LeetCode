/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (n < 1) return [];

    var i = 0,
        j = 0,
        grid = [],
        solutions = [];

    // construct grid
    for (; i < n; i++) {
        grid[i] = [];
        for (j = 0; j < n; j++) {
            grid[i][j] = '.';
        }
    }

    solve(grid, 0, solutions);

    return solutions;
};

function solve(n, c, solutions) {
    c = c === undefined ? 0 : c;

    if (c >= n.length) {
        return true;
    }

    var row = n.length,
        col = n[0].length;

    var i;

    for (i = 0; i < row; i++) {
        if (isValid(n, i, c)) {
            n[i][c] = 'Q';

            if (solve(n, c + 1, solutions)) {
                solutions.push(copy(n));
            }

            n[i][c] = '.';
        }
    }

    return false;
}


function isValid(grid, r, c) {
    return checkRow(grid, r, c) && checkCol(grid, r, c) && checkCross(grid, r, c);
}

function checkRow(grid, r, c) {
    var i = 0;

    for (; i < c; i++) {
        if(grid[r][i] === 'Q') return false;
    }

    return true;
}

function checkCol(grid, r, c) {
    var i = 0;

    for (; i < r; i++) {
        if(grid[i][c] === 'Q') return false;
    }

    return true;
}

function checkCross(grid, r, c) {
    var row = grid.length,
        col = grid[0].length,
        sx = r,
        sy = c,
        i = 1;

    for (; inRange(sy - i, 0, col) && (inRange(sx - i, 0, row) || inRange(sx + i, 0, row)); i++) {
        if (grid[sx - i] && grid[sx - i][sy - i] === 'Q') return false;
        if (grid[sx + i] && grid[sx + i][sy - i] === 'Q') return false;
    }

    return true;
}

function inRange(v, l, h) { return v >= l && v < h; }

function copy(target) {
    var ret = [];

    if (target.length === 0) return ret;

    var row = target.length,
        col = target[0].length;

    var i, j, r;

    for (i = 0; i < row; i++) {
        r = [];
        for (j = 0; j < col; j++) {
            r[j] = target[i][j];
        }
        ret[i] = r.join('');
    }

    return ret;
}
