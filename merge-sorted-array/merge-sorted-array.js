/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
//  var merge = function(A, m, B, n) {
//     var arr = [],
//         i = 0,
//         len = m + n,
//         p = 0,
//         q = 0;

//     while (i < len) {
//         if (A[p] === undefined && B[q] === undefined) {
//             break;
//         } else if (A[p] === undefined || B[q] === undefined) {
//             arr[i] = A[p] !== undefined ? A[p++] : B[q++];
//         } else {
//             arr[i] = A[p] < B[q] ? A[p++] : B[q++];
//         }

//         i++;
//     }

//     i = 0;
//     while (i < len) { A[i] = arr[i]; i++; }
// };

 var merge = function(A, m, B, n) {
    var i = m + n - 1,
        p = m - 1,
        q = n - 1;

    while (i >= 0) {
        if (A[p] === undefined && B[q] === undefined) {
            break;
        } else if (A[p] === undefined || B[q] === undefined) {
            A[i] = A[p] !== undefined ? A[p--] : B[q--];
        } else {
            A[i] = A[p] > B[q] ? A[p--] : B[q--];
        }

        i--;
    }
};
