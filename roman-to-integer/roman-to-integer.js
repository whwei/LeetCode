/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var table = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    if (!s) return null;

    var acc = 0,
        w = 0;

    var flag = false;
    var len = s.length,
        i = len - 1,
        j = len,
        sub = 0;

    for (;i >= 0; j--, i--) {
        w = table[s[i]];

        if (s[j] && s[i]) {
            if (table[s[i]] < table[s[j]]) {
                flag = true;
                w = -1 * w;
            } else if(table[s[i]] === table[s[j]]) {
                if (flag) {
                    w = -1 * w;
                }
            } else {
                flag = false;
            }
        }

        acc += w;

    }

    return acc;
};
