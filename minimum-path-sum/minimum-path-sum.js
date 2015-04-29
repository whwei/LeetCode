/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
    var m = grid.length - 1,
        n = grid[0].length - 1;

    return minPathSumIter(grid, 0, 0, m, n, {});
};

function minPathSumIter(grid, x, y, m, n, store) {
    if (x > m || y > n) return Number.MAX_VALUE;

    var key = x + '-' + y;

    if (store && store[key]) return store[key];

    var sum = 0;

    if (x === m && y === n) {
        sum = grid[x][y];
    } else if (x === m) {
        sum = grid[x][y] + minPathSumIter(grid, x, y + 1, m, n, store);
    } else if (y === n) {
        sum = grid[x][y] + minPathSumIter(grid, x + 1, y, m, n, store);
    } else {
        sum = Math.min( grid[x][y] + minPathSumIter(grid, x + 1, y, m, n, store),
                        grid[x][y] + minPathSumIter(grid, x, y + 1, m, n, store));
    }

    store[key] = sum;

    return sum;
}
