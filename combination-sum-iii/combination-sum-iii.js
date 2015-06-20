
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, start) {
    if (k === 1 && n <= 9) return [n];
    if (start > n) return [];

    start = start || 1;
    var max = Math.min(n, 9),
        solutions = [];

    for (var i = start; i < max; i++) {
        if (n - i <= i) break;
        var next = combinationSum3(k - 1, n - i, i + 1);
        if (next && next.length !== 0) {
            next.forEach(function(s) { solutions.push([i].concat(s)) });
        }
    }

    return solutions;
};
