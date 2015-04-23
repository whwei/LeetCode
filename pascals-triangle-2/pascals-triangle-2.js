/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     if (rowIndex === 1) {
//         return [1];
//     }

//     var lastRow = getRow(rowIndex - 1),
//         len = lastRow.length + 1,
//         ret = [];

//     for (var i = 0; i < len; i++) {
//         if (i === 0 || i === len - 1) {
//             ret.push(1);
//         } else {
//             ret.push(lastRow[i - 1] + lastRow[i]);
//         }
//     }

//     return ret;

// };
var getRow = function(rowIndex) {
    rowIndex++;

    var i = 0,
        half = Math.floor(rowIndex / 2),
        ret = [];

    for (; i < rowIndex; i++) {
        if (i <= half) {
            ret.push(nchoosek(rowIndex - 1, i));
        } else {
            ret.push(ret[rowIndex - i - 1]);
        }
    }

    return ret;
};

function nchoosek(n, k) {
    if (n <= 1) return 1;

    return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(n) {
    // cache
    if (factorial[n] !== undefined) return factorial[n];

    if (n === 0) return 1;

    var ret = 1,
        i = n;

    do {
        ret *= i;
        i--;
    } while(i > 1);

    factorial[n] = ret;

    return ret;
}



/*
 * item at row n index k = n choose k (0 indexed).
 *
 * factorial: 0! = 1
 *
 */
