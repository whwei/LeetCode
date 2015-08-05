/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3, store) {
    if (!s1 && !s2 && !s3) return true;
    if (!s1 && !s2 && s3) return false;
    if (!s1) return s2 === s3;
    if (!s2) return s1 === s3;

    store = store || {};

    var key = s1 + '-' + s2 + '-' + s3;
    if (store[key] !== undefined) return store[key];

    var r1 = false
    if (s1[0] === s3[0]) {
        r1 = isInterleave(s1.slice(1), s2, s3.slice(1), store);
    }

    var r2 = false
    if (!r1 && s2[0] === s3[0]) {
        r2 = isInterleave(s1, s2.slice(1), s3.slice(1), store);
    }

    store[key] = r1 || r2;

    return r1 || r2;

};
