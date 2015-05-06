/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return normalize(s) === normalize(t);
};

function normalize(s) {
    var fromCharCode = String.fromCharCode;
    var hash = {};
    var count = 33;

    var ret = [],
        sa = s.split('');

    for (var i = sa.length - 1; i >= 0; i--) {
        if (hash[sa[i]] === undefined) {
            hash[sa[i]] = count++;
        }

        ret.unshift(fromCharCode(hash[sa[i]]));
    }

    return ret.join('');
}
