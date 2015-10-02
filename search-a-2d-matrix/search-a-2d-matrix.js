/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix) return false

    var m = matrix.length, n = matrix[0].length
    var i, j

    for (i = 0; i < m; i++) {
        if (matrix[i][0] > target) return false
        if (matrix[i][n - 1] < target) continue

        for (j = 0; j < n; j++) {
            if (matrix[i][j] === target) return true
        }
    }

    return false
};

var searchMatrix = function(matrix, target) {
    if (!matrix) return false

    var m = matrix.length, n = matrix[0].length

    return searchIter(matrix, target, 0, 0, m - 1, n - 1, n)
};

function searchIter(matrix, target, sx, sy, ex, ey, n) {
    if (!matrix) return false

    var n1 = cor2n(sx, sy, n)
    var n2 = cor2n(ex, ey, n)

    if (n1 > n2) return false

    var mid = n2cor(Math.floor((n1 + n2) / 2), n)
    var midValue = matrix[mid[0]][mid[1]]
    var prev = findPrev(mid, n);
    var next = findNext(mid, n);

    if (midValue === target)    return true
    else if (midValue > target) return searchIter(matrix, target, sx, sy, prev[0], prev[1], n)
    else                        return searchIter(matrix, target, next[0], next[1], ex, ey, n)
}

function cor2n(x, y, n) {
    return x * n + y
}
function n2cor(x, n) {
    return [Math.floor(x / n), x % n]
}
function findPrev(p, n) {
    if (p[1] > 0) return [p[0], p[1] - 1]
    else          return [p[0] - 1, n - 1]
}
function findNext(p, n) {
    if (p[1] < n - 1) return [p[0], p[1] + 1]
    else              return [p[0] + 1, 0]
}
