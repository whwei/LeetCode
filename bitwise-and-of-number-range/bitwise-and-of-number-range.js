/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var shift = 0,
        changed = m ^ n;

    for (; changed > 0; shift++) changed = (changed / 2) >> 0;

    return m >> shift << shift;
};

/**
 * 1. if a bit changed, it must be 0 a end
 * 2. we only need to know the leftest changed bit, the bit in the right of it must be 0
 */
