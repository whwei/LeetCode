
/**
 * @param {string} str
 * @returns {string}
 */
// cheating
// var reverseWords = function(str) {
//     if (str === null || str === undefined) return null;

//     return str.trim().split(/\s+/).reverse().join(' ');
// };

var reverseWords = function(str) {
    if (str === null || str === undefined) return null;

    var ret = '',
        inWord = false;
        word = '';

    var i = 0,
        len = str.length;

    for (; i < len; i++) {
        if (str[i] === ' ') {
            if (inWord) {
                inWord = false;

                ret = word + (ret === '' ? '' : ' ') + ret;

                word = '';
            }
        } else {
            inWord = true;
            word += str[i]
        }
    }

    if (inWord) {
        inWord = false;

        ret = word + (ret === '' ? '' : ' ') + ret;
    }

    return ret;
};
