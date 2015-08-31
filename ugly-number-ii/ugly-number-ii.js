/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n < 1) return 0;

    var i2 = 0,
        i3 = 0,
        i5 = 0,
        last = 1;

    var buf = [];

    while(--n) {
        buf.push(last);

        var v2 = 2 * buf[i2],
            v3 = 3 * buf[i3],
            v5 = 5 * buf[i5];

        last = Math.min(v2, Math.min(v3, v5));

        i2 += (last == v2) ? 1 : 0;
        i3 += (last == v3) ? 1 : 0;
        i5 += (last == v5) ? 1 : 0;
    }
    return last;
};

/**
 * 1. trace the last number multiplied by 2, 3 and 5.
 * 2. get the next ugly number by min(v2, v3, v5)
 **/
