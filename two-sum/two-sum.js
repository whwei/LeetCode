/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    var i,
        hash = {},
        number,
        len = numbers.length;

    for (i = 0; i < len; i++) {
        number = numbers[i];

        if (hash[target - number] !== undefined) {
            return [
                i + 1,
                hash[target - number] + 1
            ].sort(function(a, b) { return a - b; });
        } else {
            hash[number] = i;
        }

    }

    return [];
};

