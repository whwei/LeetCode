/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows < 1) return [];
    if (numRows === 1) return [[1]];

    var ret = [[1]],
        currentRow,
        lastRow;

    var i, j;

    for (j = 1; j < numRows; j++) {
        currentRow = [];
        lastRow = ret[j - 1];
        for (i = 0; i < j + 1; i++) {
            currentRow.push((lastRow[i - 1] || 0) + (lastRow[i] || 0));
        }
        ret.push(currentRow);
    }

    return ret;
};
