/**
 * @constructor
 */
var WordDictionary = function() {
    this.root = new TrieNode()
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var i = 0,
        j = 0,
        l,
        temp,
        children,
        current = this.root

    var letters = word.split('')

    for (j = 0; j < letters.length; j++) {
        l = letters[j]
        children = current.children
        for (i = 0; i < children.length; i++ ) {
            if (children[i].val === l) {
                current = current.children[i]
                break
            }
        }
        if (i === children.length) {
            temp = new TrieNode(l)
            children.push(temp)
            current = temp
        }
        if (j === letters.length - 1) {
            current.isLast = true
        }
    }
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {

    return this.root.children.some(function(child) {
        return search(child, word)
    })

    function search(root, word) {
        if (word.length === 1) return (root.val === word || word === '.') && root.isLast === true

        if (!root || (root.val !== word[0] && word[0] !== '.')) return false

        var i

        var remaining = word.substr(1);

        for (i = 0; i < root.children.length; i++) {
            child = root.children[i]

            if (search(child, remaining)) return true
        }

        return false
    }
};

var TrieNode = function(val) {
    this.isLast = false
    this.children = []
    this.val = val
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
