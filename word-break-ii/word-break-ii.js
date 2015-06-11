/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict, store) {
    if (!s) return [''];

    if (s.length === 1 && wordDict.has(s)) return [s];

    if (!wordDict || wordDict.length === 0) return [''];

    store = store || {};
    if (store[s] !== undefined) return store[s];

    var solutions = [];

    var ret = false,
        i = 1,
        len = s.length;

    for (; i <= len; i++) {
        if ( wordDict.has(s.slice(0, i)) ) {
            wordBreak(s.slice(i), wordDict, store).forEach(function(w) {
                solutions.push(s.slice(0, i) + (w ? (' ' + w) : ''));
            });
        }
    }

    store[s] = solutions

    return solutions;
};
