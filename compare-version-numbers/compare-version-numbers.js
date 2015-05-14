/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1,
        v2,
        v1s = version1.split('.'),
        v2s = version2.split('.'),
        i = 0,
        len = Math.max(v1s.length, v2s.length);

    for (; i < len; i++) {
        v1 = +v1s[i] || 0;
        v2 = +v2s[i] || 0;

        if (v1 > v2) return 1;
        else if (v1 < v2) return -1;
    }

    return 0;
};
