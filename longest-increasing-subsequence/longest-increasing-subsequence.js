/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums) return null
    if (nums.length === 0) return 0

    var queue = [],
        hash = {},
        n,
        next,
        i,
        max

    queue.push(removeDecreasing(nums))

    while (queue.length !== 0) {
        n = queue.shift()

        // when find an anwser, stop adding more subsequence to the queue
        if (isIncreasing(n)) {
            max = Math.max(n.length, max || 1)
        }

        if (max !== undefined) continue

        for (i = 0; i < n.length; i++) {
            next = n.slice(0, i).concat(n.slice(i + 1))

            if (!hash[next.join('-')]) {
                queue.push(removeDecreasing(next))
                hash[next.join('-')] = true
            }
        }
    }

    return max || 1
};

function isIncreasing(n) {
    if (!n) return false
    if (n.length <= 1) return true
    var i

    for (i = 1; i < n.length; i++) {
        if (n[i] <= n[i - 1]) return false
    }

    return true
}
// remove vebose non-increasing element
function removeDecreasing(n) {
    var ret = [],
        reverse = [],
        decreasing = false,
        i,
        l

    ret.push([n[0]])

    for (i = 1; i < n.length; i++) {
        if (n[i] > n[i - 1]) {
            if (decreasing) ret.push([])
            ret[ret.length - 1].push(n[i])
            decreasing = false
        } else {
            if (!decreasing) reverse.push([])
            reverse[reverse.length - 1].push(n[i])

            decreasing = true
        }
    }
    l = Math.min(ret.length, reverse.length)
    for (i = 0; i < l; i++) {
        ret.splice(i + i + 1, 0, reverse[i].slice(-1))
    }
    return flat(ret)
}
function flat(n) {
    return n.reduce(function(ret, arr) {
        ret = ret.concat(arr)
        return ret
    }, [])
}
