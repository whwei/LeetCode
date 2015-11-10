/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!s || !t) return ''

    var r = new Array(256),
        need = t.length,
        len = Number.MAX_VALUE,
        p = 0,
        left = 0,
        i = 256

    while (i-->0) { r[i] = 0 }

    t.split('').forEach(function(c, i) { r[t.charCodeAt(i)]++ })

    while (i <= s.length && p < s.length) {
        if (need) {
            if (i === s.length) break

            r[s.charCodeAt(i)]--

            if (r[s.charCodeAt(i)] >= 0) need--

            i++
        } else {
            // is it shorter?
            if (i - p < len) {
                len = i - p
                left = p
            }
            // return character at p
            r[s.charCodeAt(p)]++
            // if counter at p > 0 that means we need more character
            if (r[s.charCodeAt(p)] > 0) need++
            // move left pointer to the next position
            p++
        }
    }

    return len === Number.MAX_VALUE ? '' : s.slice(left, left + len)
};
