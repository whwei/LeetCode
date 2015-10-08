
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var i
    var arr = [0]

    for (i = 1; i < ratings.length; i++) {
        arr[i] = 0
        if (ratings[i] > ratings[i - 1]) {
            arr[i] = arr[i - 1] + 1
        }
    }

    for (i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            arr[i] = Math.max(arr[i], arr[i + 1] + 1)
        }
    }

    return arr.reduce(function(a, b) { return a + b }, ratings.length)
};
