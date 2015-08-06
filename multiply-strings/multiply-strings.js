/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length,
        len2 = num2.length,
        d1,
        d2

    var products = [0];

    for (var i = len1 - 1; i >= 0; i--) {
        for (var j = len2 - 1; j >= 0; j--) {
            d1 = num1[i];
            d2 = num2[j];
            if (products[i + j + 1] === undefined) {
                products[i + j + 1] = 0;
            }
            products[i + j + 1] += d1 * d2;
        }
    }

    var e = 0,
        tmp;
    for (var i = products.length - 1; i >= 0; i--) {
        tmp = (products[i] + e) % 10;
        e = Math.floor((products[i] + e) / 10);
        products[i] = tmp;
    }

    return deleteHeadZero(products).join('') || '0';
};

function deleteHeadZero(arr) {
    var i = 0
    while (arr[i] == 0) {
        i++
    }

    return arr.slice(i);
}
