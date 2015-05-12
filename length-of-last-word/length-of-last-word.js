/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s || /^\s+$/.test(s)) return 0;

    return s.trim().split(/\s+/).reverse()[0].length;
};
