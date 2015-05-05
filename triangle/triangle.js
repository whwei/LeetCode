
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle, pos, store) {
	if (!triangle || triangle.length <= 0) return null;
    if (triangle.length === 1) return triangle[0][0];

    store = store || {};
    var key = triangle.length + '-' + pos;

    if (store[key]) { return store[key]; }

    var len = triangle.length,
    	restTriangle = triangle.slice(0, -1),
    	currentRow = triangle[len - 1],
    	min = Number.MAX_VALUE;

   	if (pos === undefined) {
   		for (var i = currentRow.length - 1; i >= 0; i--) {
	    	min = Math.min( minimumTotal(triangle, i, store),
	    					min);
	    }
   	} else {
   		if (pos === 0) {
   			min = minimumTotal(restTriangle, pos, store) + currentRow[pos];
   		} else if (pos === len - 1) {
   			min = minimumTotal(restTriangle, pos - 1, store) + currentRow[pos];
   		} else {
	   		min = Math.min( minimumTotal(restTriangle, pos - 1, store),
	   						minimumTotal(restTriangle, pos, store)
	   			) + currentRow[pos];
   		}
   	}


    store[key] = min;

    return min;
};



/**
 * subproblem: let D(n) be the minimum path from top to bottom in triangle[n][n], D(n, i) be the minimum path from top to ith item in row n
 *
 * recurrence: D(n) = min(D(n, 1), D(n, 2), ..., D(n, n))
 *             D(n, i) = min(D(n - 1, leftAdjacentNumber), D(n - 1, rightAdjacentNumber))
 *
 * base case: D(0) = null
 *            D(1) = triangle[0][0]
 *
 */
