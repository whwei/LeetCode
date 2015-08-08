/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    var counter = 0;

    grid.forEach(function(n, i) {
        if (!Array.isArray(n))
            n = [n]

        n.forEach(function(m, j) {
            if (grid[i][j] == 1) {
                counter++;
                flip(grid, i, j);
            }
        });
    });

    return counter;
};

function flip(grid, x, y) {
    if (grid[x] && grid[x][y] !== undefined && grid[x][y] == 1) {
        grid[x][y] = 0;
        flip(grid, x + 1, y);
        flip(grid, x, y + 1);
        flip(grid, x - 1, y);
        flip(grid, x, y - 1);
    }
}

/**
 * remove each region when it has been counted so that it will not affect
 * the remaining explore (cells in one region will not cause repeat count of region number).
 */
