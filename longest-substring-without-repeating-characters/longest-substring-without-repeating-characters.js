/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s || s.length === 0) return 0;
    if (s.length === 1) return 1;

    var hash = {};
    var sq = [];

    var start = 0,
        end = 0,
        len = s.length,
        max = 0;

    for (;end < len; end++) {
        if (hash[s[end]] !== undefined && hash[s[end]] >= start) {
            if (end - start > max) {
                max = end - start;
            }

            start = hash[s[end]] + 1;
        }

        hash[s[end]] = end;

    }

    return Math.max(end - start, max);
};

/**
 * hash table: store none reqeating sequence (key => characters, value => pos)
 *
 */
