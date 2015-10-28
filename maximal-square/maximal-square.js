malSquare = function(matrix) {
    if (!matrix || matrix.length === 0) return 0

    var m = matrix.length,
        n = matrix[0].length,
        dp = [], // maximal square size end at dp[i][j]
        i, j

    // initialize
    for (i = 0; i < m + 1; i++) {
        if (!dp[i]) dp[i] = []
        for (j = 0; j < n + 1; j++) {
            dp[i][j] = 0
        }
    }

    var max = 0

    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
                max = Math.max(max, dp[i][j])
            }
        }
    }

    return max * max
};

