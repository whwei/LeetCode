/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height || height.length < 3) return 0;

    var v = 0,
        l = 0,
        r = height.length - 1,
        lMax = height[l],
        rMax = height[r];

    while (l < r) {
        lMax = Math.max(height[l], lMax);
        rMax = Math.max(height[r], rMax);
        if (lMax < rMax) {
            v += lMax - height[l];
            l++;
        } else {
            v += rMax - height[r];
            r--;
        }
    }

    return v;
};

/**
 * For the ith item in the array, the volumn of water: `v = min(leftMax, rightMax) - height[i]`
 * The leftMax from left to right is non-descending, the rightMax from right to left is non-descending.
 * For case 1, we can calc the volumn using the equation above; For case 2, when a greater max value is
 * encountered, we just update the current max value.
 *
 * case 1:
 * |
 * ||  |  | ||
 * |||||||||||
 *
 * case 2:
 *    |   |
 * |  |   |  |
 * |||| ||| ||
 * |||||||||||
