/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var i,
        j,
        key,
        cols = [],
        blocks = {};

    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            cols[j] = cols[j] || [];
            cols[j].push(board[i][j]);

            key = ((i / 3) >> 0) + '-' + ((j / 3) >> 0);
            blocks[key] = blocks[key] || [];
            blocks[key].push(board[i][j]);
        }
    }

    blocks = Object.keys(blocks).map(function(key) { return blocks[key]; });

    if (isntCollectionValid(board)) return false;
    if (isntCollectionValid(cols)) return false;
    if (isntCollectionValid(blocks)) return false;

    return true;
};

function isntCollectionValid(collection) {
    return collection.some(function(it) {
        return isntValid(it);
    });
}

function isntValid(row) {
    var hash = {};

    return row.some(function(it) {
        if (it !== '.' && hash[it] !== undefined) {
            return true;
        } else {
            hash[it] = true;
            return false;
        }

    })
}
