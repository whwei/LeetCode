/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (!citations || citations.length === 0) return 0

    var range = Math.min(citations.length, Math.max.apply(null, citations))

    citations.sort(function(a, b) { return a < b ? 1 : -1 })

    while (!check(citations, range) && range >= 0) {
        range--
    }

    return Math.max(range, 0)
};

function check(citations, h) {
    var i,
        r1 = false,
        r2 = false
    var rest = []

    // h of his/her N papers have at least h citations each
    var counter = 0
    for (i = 0; i < citations.length; i++) {
        if (citations[i] >= h && !r1) {
            counter++
        } else {
            rest.push(citations[i])
        }

        if (counter >= h) {
            r1 = true
        }
    }


    // the other N − h papers have no more than h citations each
    r2 = rest.every(function(n) { return n <= h })

    return r1 && r2
}
