/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    if (s === '' && t === '') return 1
    if (s.length < t.length) return 0
    if (s === t) return 1

    var m = s.length,
        n = t.length,
        i,
        j

    var dp = [];
    // initialize
    for (i = 0; i < n + 1; i++) {
        dp[i] = []
        for (j = 0; j < m + 1; j++)
            dp[i][j] = 0
    }
    for (i = 0; i < m; i++) {
        dp[0][i] = 1
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            if (t[i] === s[j]) {
                dp[i + 1][j + 1] += dp[i][j] + dp[i + 1][j]
            } else {
                dp[i + 1][j + 1] += dp[i + 1][j]
            }
        }
    }

    return dp[n][m];
};
