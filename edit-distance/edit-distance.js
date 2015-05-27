/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word1 === word2) return 0;
    if (word1.length === 0) return word2.length;
    if (word2.length === 0) return word1.length;

    var d = [];

    var len1 = word1.length,
        len2 = word2.length,
        i = 0,
        j = 0;

    while (i <= len1) {
        if (!d[i]) d[i] = [];

        d[i][0] = i;
        i++;
    }

    while (j <= len2) {
        d[0][j] = j;
        j++;
    }

    for (i = 1; i <= len1; i++) {
        for (j = 1; j <= len2; j++) {
            d[i][j] = Math.min(
                d[i - 1][j] + 1,
                d[i][j - 1] + 1,
                d[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
            );
        }
    }

    return d[len1][len2];
}
