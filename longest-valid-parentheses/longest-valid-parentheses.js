/**
 * @param {string} s
 * @return {number}
 */

// time: O(n), space: O(n)
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



// DP: time: O(n), space: O(n)
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
