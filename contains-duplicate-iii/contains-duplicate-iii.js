
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (t < 0 || k < 1) return false;

    var map = {},
        i,
        n,
        v,
        counter = 0;

    for (i = 0; i < nums.length; i++) {
        n = nums[i];
        v = Math.floor(n / (t + 1));

        // find valid number in the same bucket or buckets beside
        if (map[v] !== undefined ||
           (map[v - 1] !== undefined && Math.abs(map[v - 1] - n) <= t) ||
           (map[v + 1] !== undefined && Math.abs(map[v + 1] - n) <= t)) {
            return true;
        }

        // remove redundant buckets
        // Object.keys has performance issue here, use a counter to track length of map
        if (counter >= k) {
            delete map[Math.floor(nums[i - k] / (t + 1))];
            counter--;
        }

        if (map[v] === undefined) counter++;
        map[v] = n;
    }

    return false;
};
