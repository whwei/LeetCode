/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    var grid = [];

    var ss = s.split(''),
        count = 0,
        c = 0,
        r = 0;

    var block = 2 * numRows - 2,
        back = false;

    while (ss.length > 0) {
        if (!grid[r]) grid[r] = [];

        grid[r][c] = ss.shift();

        if (count % block < numRows && r + 1 < numRows) {
            r++;
        } else {
            c++;
            r--;
        }

        count++;
    }

    var i = 0,
        j = 0,
        ret = '';

    for (; i < numRows; i++) {
        j = 0;
        for (; j <= c; j++) {
            if (grid[i][j])
                ret += grid[i][j];
        }
    }

    return ret;
};
