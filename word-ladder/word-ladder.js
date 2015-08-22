/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
    if (beginWord === endWord) return 1;
    if (beginWord.length !== endWord.length) return 0;

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    var queue = [],
        front,
        word,
        transform,
        i,
        j,
        l;

    // [word, level]
    queue.push([beginWord, 0]);

    while (queue.length !== 0) {
        front = queue.shift();
        word = front[0];

        for (i = 0; i < word.length; i++) {

            for (j = 0; j < alphabet.length; j++) {
                l = alphabet[j];
                transform = word.substr(0, i) + l + word.substr(i + 1);

                if (endWord === transform) {
                    // beginWord => ... => endWord
                    return front[1] + 2;
                } else if (wordDict.has(transform)) {
                    queue.push([transform, front[1] + 1]);
                    wordDict.delete(transform);
                }
            }
        }

    }

    return 0;
};
