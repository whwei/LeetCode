
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (!intervals) return null;
    if (intervals.length == 0) return intervals;

    intervals.sort(compare);

    var ret = [],
        i = 0,
        len = intervals.length,
        itvStart = null,
        itvEnd = null,
        current;

    for (;i < len + 1;) {

        current = intervals[i];

        if (!current) {
            ret.push(new Interval(itvStart, itvEnd));
            break;
        }

        if (itvStart === null) {
            itvStart = current.start;
            itvEnd = current.end;
            i++;
            continue;
        }

        if (itvEnd >= current.start) {
            itvEnd = Math.max(itvEnd, current.end);
            i++;
        } else {
            ret.push(new Interval(itvStart, itvEnd));
            itvStart = null;
            itvEnd = null;
        }
    }

    return ret;
};

function compare(a, b) {
    return a.start < b.start ? -1 : 1;
}

