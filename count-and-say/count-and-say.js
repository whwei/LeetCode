/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n <= 1) return '1';

    if (countAndSay[n] !== undefined) {
        return countAndSay[n];
    }

    var last = countAndSay(n - 1);

    var s = [],
        p,
        i = 0,
        j = 0,
        len = last.length;

    for (; i < len;) {
        p = last[i];

        for (j = i + 1; last[j] === p; j++) {}

        s.push((j - i) + '' + p);

        i = j;

    }

    var ret = s.join('');
    countAndSay[n] = ret;

    return ret;

};


/*
 * NO INTEGER MORE THAN 3 EXISTS IN THE SUQUENCE
 *
 * suppose the ith sequence is ...Y1111Z...(4 of x)
 *
 * then the ith sequence is read off as "Y 1", "one 1", "one Z" or ". Y", "one 1", "one 1", "z ."
 * which is the same as "(Y + 1) 1", "one Z" and ". Y", "two 1", "z ."
 * which could be written as ...(Y + 1)11Z... and ...Y21Z...
 */
