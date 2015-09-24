
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function find(n, start, min) {
        min = min || n + 1
        start = start || 1

        if (!n || n < 1) return min

        var mid = Math.floor((start + n) / 2)

        if (isBadVersion(mid)) {
            return find(mid - 1, start, mid)
        } else {
            if (min === mid + 1) {
                return min
            } else {
                return find(n, mid + 1, min)
            }
        }
    };
};
