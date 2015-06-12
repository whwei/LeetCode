
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var MAX = 2147483647,
        MIN = -2147483648;

    var dv = Math.abs(dividend);
    var ds = Math.abs(divisor);

    if (dv > MAX) dv = MAX;

    var ret = 0;

    if (dv === ds) {
        ret = 1;
    } else {
        /**
         * bitwise operators(<<, >>) in JavaScript treat their operands as a sequence of 32 bits,
         * so when operands overflow (>2147483647 or < -2147483648), the expression returns
         * incorrect result(2147483648 >> 1 => -1073741824).
         *
         * In this case, we ignore the sign of dividend and divisor for convenience.
         * The problem of this approach is we can only calculate `abs(dividend)` less than 2147483648,
         * so we have to handle the special case where `dividend == -2147483648`.
         */
        if (dividend <= MIN) {
            dv = MIN;
            ds = -ds;
            var remaining = dv,
                r,
                shift;

            while (remaining <= ds) {

                shift = -1;
                r = remaining;
                while (r <= ds && shift < 31) {
                    r = r >> 1;
                    shift++;
                }

                remaining = remaining - (ds << shift);
                ret = ret + (1 << shift);
            }
        } else {
            var remaining = dv,
                r,
                shift;

            while (remaining >= ds) {

                shift = -1;
                r = remaining;
                while (r >= ds) {
                    r = r >> 1;
                    shift++;
                }

                remaining = remaining - (ds << shift);
                ret = ret + (1 << shift);
            }
        }
    }

    ret = Math.abs(ret);
    if ((dividend >= 0) != (divisor >= 0))
        ret = -ret;


    return ret > MAX ? MAX : (ret < MIN ? MIN : ret);
};



/**
 * 23 / 3
 *
 *   remaining          ret
 *   23-12(3<<2)    ret += 4(1<<2) 4
 *   11-6(3<<1)     ret += 2(1<<1) 6
 *   5-3(3<<0)      ret += 1(1<<0) 7
 *
 *   12 + 6 + 3 + 2 = 23
 */
