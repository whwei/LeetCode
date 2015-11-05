/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {

    var i,
        ss,
        candidate,
        flag = false,
        queue = [],
        set = {},
        ret = []

    queue.push(s)
    set[s] = true

    // bfs solution
    while (queue.length !== 0) {
        ss = queue.shift()

        if (valid(ss)) {
            ret.push(ss)
            // when we find the anwser, stop adding candidates to the queue
            flag = true
            continue
        }

        if (flag) continue

        for (i = 0; i < ss.length; i++) {
            if (ss[i] !== '(' && ss[i] !== ')') continue

            candidate = ss.slice(0, i) + ss.slice(i + 1)

            // exam every possible candidate
            if (!set[candidate]) {
                queue.push(candidate)
                set[candidate] = true
            }
        }
    }

    return ret
};

function valid(s) {
    var i, counter = 0

    for (i = 0; i < s.length; i++) {
        if (s[i] === '(')                         counter++
        else if (s[i] === ')' && counter-- === 0) return false
    }

    return counter === 0
}


