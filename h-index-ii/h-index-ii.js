
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var l = 0,
        r = citations.length,
        mid,
        ret = 0;

    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (citations[citations.length - mid - 1] > mid) {
            l = mid + 1;
            ret = l;
        } else {
            r = mid - 1;
        }
    }
    return ret;
}
