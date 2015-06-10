/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, store) {
    if (!s) return true;
    if (!wordDict || wordDict.length === 0) return false;

    store = store || {};

    if (store[s] !== undefined) return store[s];

    var ret = false,
        i = 1,
        len = s.length;

    for (; i <= len; i++) {
        if (wordDict.has(s.slice(0, i))) {
            ret = wordBreak(s.slice(i), wordDict, store);
            if (ret) break;
        }
    }
    store[s] = ret;

    return ret;
};
