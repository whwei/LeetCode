/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    var col0 = true,
        m = matrix.length,
        n = matrix[0].length

    var i, j

    for (i = 0; i < m; i++) {
        if (matrix[i][0] === 0) col0 = false
        for (j = 1; j < n; j++)
            if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0
    }

    for (i = m - 1; i >= 0; i--) {
        for (j = n - 1; j >= 1; j--)
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0
        if (col0 === false) matrix[i][0] = 0
    }
}
