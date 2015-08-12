/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    if (x <= 0) return 0;

    var guess = 1;
    while (!goodEnough(x, guess * guess)) {
        guess += x / guess;
        guess = guess / 2;
    }

    return Math.floor(guess);
};

function goodEnough(target, guess) {
    return Math.abs(target - guess) < 0.00001;
}
