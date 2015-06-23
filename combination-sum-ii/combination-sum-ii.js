/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target, sorted) {

    !sorted && candidates.sort(ascNumber);

    if (target === 0 || !candidates || candidates.length === 0) return [];


    var solutions = {};

    for (var j = 0; j < candidates.length; j++) {
        var n = candidates[j];

        if (n === target) solutions[[n].join('-')] = true;
        if (target <= n) break;

        var next = combinationSum2(candidates.slice(j + 1), target - n, true);

        if (next && next.length > 0) {
            next.forEach(function(s) { solutions[([n].concat(s)).join('-')] = true; });
        }

    }

    return Object.keys(solutions).map(function(key) {
        return key.split('-').map(function(i) { return +i; });
    });
};

function ascNumber(a, b) {
    return a < b ? -1 : 1;
}
