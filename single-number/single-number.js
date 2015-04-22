/**
 ** @param {number[]} A
 ** @return {number}
 **/
var singleNumber = function(A) {
    var ret = 0,
        i = 0,
        len = A.length;

    for(; i < len; i++) {
        ret = ret ^ A[i];
    }

    return ret;
};


/*
 * XOR
 * A XOR (B XOR C) = (A XOR B) XOR C
 *
 */
