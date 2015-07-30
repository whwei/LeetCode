/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (!nums) return []

    var groups = nums.reduce(function(ret, num) {
        var last = ret[ret.length - 1]

        if (!last || last.length === 0) {
            ret.push([num]);
        } else if (last[last.length - 1] + 1 === num) {
            last.push(num);
        } else if (last[last.length - 1] + 1 < num) {
            ret.push([num]);
        }
        return ret;
    }, [])

    return groups.map(function(group) {
        return group.length > 1 ? group[0] + '->' + group[group.length - 1] : '' + group[0];
    })
};
