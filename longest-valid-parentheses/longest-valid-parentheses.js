/**
 * @param {string} s
 * @return {number}
 */

// time: O(n), space: O(n)
// store invalid parentheses position in a stack,
// then iterate the stack to get the maximum span.
var longestValidParentheses = function(s) {
     var ss = s.split(''),
         stack = [],
         l,
         max = 0;

     ss.forEach(function(c, i) {
         if (c === '(') {
             stack.push(i);
         } else {
             if (ss[stack[stack.length - 1]] === ')' || stack.length === 0) {
                 stack.push(i);
             } else {
                 stack.pop();
             }
         }
     });

     stack.push(ss.length);
     stack.unshift(-1);

     for (var i = 0; i < stack.length - 1; i++) {
         l = stack[i + 1] - stack[i] - 1;
         max = Math.max(l, max);
     }

     return max;
 };


// time: O(n), space: O(1)
// record parentheses depth to see if there is invalid `)`, such as "())".
// if so, current sequence stops, reset `depth` and record the new substring start position `start`;
// if depth === 0, check to see if length of the current substring is larger than previous one.
//
// for special case like "(()", `depth` will never reach 0 because of the invalid `(`, so we need
// anther loop to iterate from the end of the string so that we can turn this special invalid `(`
// to normal `)` case.
// finally, compare the result of the two loop to get the final anwser.
var longestValidParentheses = function(s) {
     var max = 0,
         depth = 0,
         start = -1;

     var ss = s.split('');

     for (var i = 0; i < ss.length; i++) {
         var c = ss[i];
         if (c === '(') {
             depth++;
         } else {
             depth--;

             if (depth < 0) {
                 start = i;
                 depth = 0;
             } else if (depth === 0) {
                 max = Math.max(max, i - start);
             }
         }
     }

     depth = 0;
     start = ss.length;
     for (var j = ss.length - 1; j >= 0; j--) {
         var c = ss[j];
         if (c === ')') {
             depth++;
         } else {
             depth--;

             if (depth < 0) {
                 start = j;
                 depth = 0;
             } else if (depth === 0) {
                 max = Math.max(max, start - j);
             }
         }
     }

     return max;
 };



/** DP: time: O(n), space: O(n)
 *  subproblem: let D(i) be the length of the longest valid parentheses end with the ith element in given string.
 *  recurrence: 1) if s[i] == '(', then D(i) = 0, for none valid parentheses ends with '('.
 *              2) if s[i] == ')'
 *                  2.1) s[i - 1] == '(', D(i) = D(i - 2) + 2 ("xxxxxx()").
 *                  2.2) s[i - 1] == ')' &&  ss[i - D(i-1) - 1] == '(', D(i) = D(i - D(i - 1) - 2) + D(i - 1) + 2
 *                      ("xxxxx(xxxxx)")
 *  base case: D(0) = 0
 *             D(1) = 0
 */
var longestValidParentheses = function(s) {
    if (s.length < 2) return 0;

    var dp = [];

    var i,
        max = 0;

    var ss = s.split('');

    for(i = 0 ; i < ss.length; i++){
        if (ss[i] === ')') {
            if (ss[i - 1] === '(') {
                dp[i] = (dp[i - 2] || 0) + 2;
                max = Math.max(max, dp[i]);
            } else if (ss[i - 1] === ')' && ss[i - dp[i - 1] - 1] === '(') {
                dp[i] = (dp[i - dp[i - 1] - 2] || 0) + dp[i - 1] + 2;
                max = Math.max(max, dp[i]);
            }
        } else {
            dp[i] = 0;
        }
    }

    return max;
};
