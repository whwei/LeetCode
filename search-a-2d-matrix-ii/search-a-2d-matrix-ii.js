
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0) return null;

    var n = matrix.length,
        m = matrix[0].length;

    var i, j;

    for (i = 0; i < n; i++) {
        if (target < matrix[i][0] || target > matrix[i][m - 1]) continue;

        if (bs(matrix[i], 0, m - 1, target)) return true;
    }

    return false;
};

function bs(arr, s, e, t) {
    if (!arr || arr.length === 0) return false;
    if (s > e) return false;

    var p = Math.floor((s + e) / 2);

    if (arr[p] === t) return true;
    else if (arr[p] > t) return bs(arr, s, p - 1, t);
    else if (arr[p] < t) return bs(arr, p + 1, e, t);

}

