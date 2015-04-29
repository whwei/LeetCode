/**
 * @param {number[][]} obstacleGrid
 * @returns {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid, x, y, store) {
    var m = obstacleGrid.length - 1,
        n = obstacleGrid[0].length - 1;

    if (obstacleGrid[m][n] !== 0) return 0;

    x = x !== undefined ? x : 0;
    y = y !== undefined ? y : 0;

    var key = x + '-' + y;
    store = store || {};

    if (store[key] !== undefined) return store[key];

    if (!obstacleGrid ||
        obstacleGrid[x] === undefined ||
        obstacleGrid[x][y] !== 0) {
        store[key] = 0;
        return 0;
    }

    if (x === m && y === n) {
        store[key] = 1;
        return 1;
    }


    var sum = 0;


    sum = (x + 1 < obstacleGrid.length ? uniquePathsWithObstacles(obstacleGrid, x + 1, y, store) : 0) +
          (y + 1 < obstacleGrid[0].length? uniquePathsWithObstacles(obstacleGrid, x, y + 1, store) : 0);


    store[key] = sum;

    return sum;
};
