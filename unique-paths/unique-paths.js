/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m <= 1 || n <= 1) return 1;

    var key = m + '-' + n;
    if (uniquePaths[key]) return uniquePaths[key];

    var sum = 0;

    sum = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);

    uniquePaths[key] = sum;

    return sum;
};



/*
 * subproblem: let D(m, n) be the # of ways for a robot to reach the bottom-right corner from top-left corner
 *
 * recurrence: D(m, n) = D(m - 1, n) + D(m, n - 1)
 *
 * base case: D(1, x) = 1
 *            D(x, 1) = 1
 *
 */
