/**
 * @param {number[]} nums
 * @return {string}
 */



var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        return compareWithPadding(a, b) ? -1 : 1;
    });

    return removeZeros(nums).join('');
};

function compareWithPadding(a, b) {
    var sa = a + '' + b,
        sb = b + '' + a;

    return sa > sb;

}


function removeZeros(n) {

    while (n[0] == '0') {
        n.shift();
    }

    if (n.length === 0) return [0];

    return n;
}
