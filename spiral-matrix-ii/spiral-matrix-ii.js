/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    var i = 0, j = n - 1, k
    var counter = 1;
    
    var ret = []
    while(i < j) {
        
        for(k = i; k < j; k++) {
            if (!ret[i]) ret[i] = []
            ret[i][k] = counter++
        }
        for(k = i; k < j; k++) {
            if (!ret[k]) ret[k] = []
            ret[k][j] = counter++
        }
        for(k = i; k < j; k++) {
            if (!ret[j]) ret[j] = []
            ret[j][n - 1 - k] = counter++
        }
        for(k = i; k < j; k++) {
            if (!ret[n - 1 -k]) ret[n - 1 - k] = []
            ret[n - 1 - k][i] = counter++
        }

        i++
        j--
    }

    if(i === j) {
        if (!ret[i]) ret[i] = []
        ret[i][j] = counter
    }

    return ret
};
