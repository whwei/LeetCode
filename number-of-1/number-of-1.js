/**
 ** @param {number} n - a positive integer
 ** @return {number}
 **/
var hammingWeight = function(n) {
    var binary = (n >>> 0).toString(2);

    var i = 0,
        counter = 0;

    while (i < binary.length) {
        if (binary[i] === '1') counter++;
            i++;
    }

    return counter;
};

/*
 * the operands of bitwise operator(in this case >>>) are converted
 * to signed 32-bit integers in two's complement format.
 *
 * (11).toString(2);         // "1011"
 * (-11).toString(2);        // "-1011"
 * (-11 >>> 0).toString(2)   // "11111111111111111111111111110101"
 *
 */
