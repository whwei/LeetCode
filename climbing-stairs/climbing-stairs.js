/**
 * @param {number} n
 * @return {number}
 */
// recursive version
// var climbStairs = function(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     if (climbStairs[n]) return climbStairs[n];

//     var ret = climbStairs(n - 1) + climbStairs(n - 2);

//     climbStairs[n] = ret;
//     return ret;
// };

// iterative version
var climbStairs = function(n) {
    var p = 1, pp = 0;

    var ret = 0,
        temp;

    for (var i = 0; i < n; i++) {
        ret = p + pp;

        pp = p;
        p = ret;
    }

    return ret;
};
