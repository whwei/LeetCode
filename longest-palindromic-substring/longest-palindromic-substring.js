
/**
 * @param {string} s
 * @return {string}
 */
/**
 * O(n^2) time
 * O(1) space
 */
var longestPalindrome = function(s) {
    if (!s) return null;
    if (s.length === 1) return s;

    var i = 0,
        p,
        max = '',
        len = s.length;

    for (; i < len; i++) {
        p = palindrome(s, i, i);
        max = p.length > max.length ? p : max;

        p = palindrome(s, i, i + 1);
        max = p.length > max.length ? p : max;
    }

    return max;
};

function palindrome(s, l, r) {
    while (s[l] === s[r] && s[l] !== undefined) { l--; r++; }

    return s.substring(l + 1, r);
}



/**
 * DP: O(n^2) time, O(n^2) space
 * subproblem: D(i, j) == true iff substring si...sj is a palindrome
 * recurrence: D(i, j) == true iff D(i+1, j-1) == true && s[i] == s[j]
 * base case: D(i, i) == true, D(i, i+1) == true iff s[i] == s[i+1]
 */
var longestPalindrome = function(s) {
    if (!s) return null;
    if (s.length === 1) return s;

    var d = [];

    var i, j, start, max = 1;

    // every single character is a palindrome
    for (i = 0; i < s.length; i++) {
        d[i] = [];
        d[i][i] = true;
    }

    for (i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            d[i][i + 1] = true;
            max = 2;
            start = i;
        }
    }

    // start with palindrome of length 3
    for (i = 3; i <= s.length; i++) {
        for (j = 0; j < s.length - i + 1; j++) {
            if (s[j] === s[j + i - 1] && d[j + 1][j + i - 2]) {
                d[j][j + i - 1] = true;
                start = j;
                max = i;
            }
        }
    }

    return s.substr(start, max);
};
