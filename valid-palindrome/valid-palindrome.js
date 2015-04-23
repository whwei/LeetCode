/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphanumeric(c) {
    var code = c.charCodeAt(0);
    return (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) ||
           (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) ||
           (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0));
}

var isPalindrome = function(s) {

    var ns = [],
        p = 0,
        q = s.length;

    for (; p < q; p++) {
        if (isAlphanumeric(s[p])) {
            ns.push(s[p]);
        }
    }

    s = ns.join('');

    if (s === '') return true;

    var ret = true,
        i = 0,
        len = s.length,
        half = s.length / 2;

    for (; i <= half; i++) {

        if (!s[i] || !s[len - i - 1] || s[i].toUpperCase() !== s[len - i - 1].toUpperCase()) {
            return false;
        }
    }

    return ret;
};



/*
 * NOTE
 * is empty string a palindrome?
 *
 */
