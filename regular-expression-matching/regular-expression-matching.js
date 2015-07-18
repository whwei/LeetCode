/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p) return !s;

    // check 1st character when 2nd character of p is not `*`
    if (p.length === 1 || p[1] !== '*') {
        if ((p[0] !== '.' && s[0] !== p[0]) || !s)
            return false;
        else
            return isMatch(s.substr(1), p.substr(1));
    }

    // s exits, p: '[x*]xxxxx'
    while (s && (s[0] === p[0] || p[0] === '.')) {
        // p: [x*] match 0 character
        if (isMatch(s, p.substr(2))) {
            return true;
        }
        // p: [x*] match 1 character
        s = s.substr(1);
    }

    return isMatch(s, p.substr(2));
};
