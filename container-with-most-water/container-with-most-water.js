/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (!height || height.length === 0) return 0

    var i = 0,
        j = height.length - 1,
        minHeight,
        max = 0

    while (i < j) {
        minHeight = Math.min(height[i], height[j])
        // water this container contains
        max = Math.max(max, (j - i) * minHeight)

        while (height[i] <= minHeight && i < j) i++
        while (height[j] <= minHeight && i < j) j--
    }

    return max
};
