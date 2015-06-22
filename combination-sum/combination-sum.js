
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    candidates.sort(ascNumber);

    if (target === 0 || !candidates || candidates.length === 0) return [];


    var solutions = [];

    for (var j = 0; j < candidates.length; j++) {
        var n = candidates[j];

        if (n === target) solutions.push([n]);
        if (target <= n) break;

        var next = combinationSum(candidates.slice(j), target - n);

        if (next && next.length > 0) {
            next.forEach(function(s) { solutions.push([n].concat(s)); });
        }
    }

    return solutions;
};

function ascNumber(a, b) {
    return a < b ? -1 : 1;
}
