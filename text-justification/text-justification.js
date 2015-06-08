/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var ret = [],
        pack = [];

    var i = 0,
        len = words.length,
        w;

    // pack
    for (; i < len;) {
        w = words[i];

        if (pack.join(' ').length + w.length + (pack.length === 0 ? 0 : 1) <= maxWidth) {
            pack.push(w);
            i++;
        } else {
            ret.push(pack.slice());
            pack = [];
        }
    };
    ret.push(pack.slice());

    // add padding
    return ret.map(function(s, i) {
        return addPadding(s, maxWidth, i === ret.length - 1);
    });
};


function addPadding(s, max, last) {
    var words = s.length,
        wordTotalLength = s.join('').length;

    if (last) {
        var joined = s.join(' ');
        return joined + (new Array(max - joined.length + 1).join(' '));
    }

    var pieces = words - 1;

    if (words === 1 && wordTotalLength < max) pieces = 1;


    var paddings = divide(max - wordTotalLength, pieces);

    return s.reduce(function(prev, word, i) {
        return prev + word + (paddings[i] !== undefined ? paddings[i] : '');
    }, '');
}

// divide n spaces into p evenly distributed parts
function divide(n, p) {
    if (n === 0) return [];

    var c = n % p,
        h = Math.ceil(n / p),
        l = Math.floor(n / p);

    var acc = 0,
        ret = [];

    while (ret.length < p) {
        // add extra space first
        if (c !== 0) {
            ret.push(new Array(l + 2).join(' '));
            acc += l + 1;
            c--;
        } else if (acc + l <= n) {
            ret.push(new Array(l + 1).join(' '));
            acc += l;
        } else {
            ret.push(new Array(n - acc + 1).join(' '));
            acc += n - acc;
        }
    }

    return ret;
}
