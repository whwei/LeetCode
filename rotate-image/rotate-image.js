/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix, w) {
    if (!matrix || matrix.length <= 1) return;

    var len = matrix.length - 1,
        i = 0;
    w = w || 0;

    if (matrix.length - 2 * w <= 0) return;

    var x = w,
        y = w;

    for (; w + i < len - w; i++) {
        rotateItem(matrix, i, w, len);
    }

    rotate(matrix, w + 1)
};

function rotateItem(arr, i, w, n) {
    // 1. w, w+i
    // 2. w+i, n-w
    // 3. n-w, n-w-i
    // 4. n-w-i, w
    swap(arr, w,w+i, w+i,n-w);
    swap(arr, w,w+i, n-w,n-w-i);
    swap(arr, w,w+i, n-w-i,w);
}

function swap(arr, x,y, p,q) {
    var temp = arr[x][y];
    arr[x][y] = arr[p][q];
    arr[p][q] = temp;
}
