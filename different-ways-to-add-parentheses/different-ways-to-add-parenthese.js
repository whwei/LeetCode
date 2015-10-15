/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    if (!input) return []

    var ips = split(input)

    if (ips.length === 1 && Number(ips[0]) === +ips[0]) return ips

    return ips.reduce(function(ret, l, i) {
        if (l === '+' || l === '-' || l === '*') {
            ret = ret.concat(compose(
                diffWaysToCompute(ips.slice(0, i).join('')),
                diffWaysToCompute(ips.slice(i + 1).join('')),
                l
            ))
        }
        return ret
    }, [])
};

function split(s) {
    var ns = s.split(/\D/)
    var ops = s.split(/\d+/).filter(function(o) { return !!o })
    var op

    return ns.reduce(function(ret, n) {
        ret.push(+n)
        op = ops.shift()

        if (op) ret.push(op)

        return ret
    }, [])
}

function compose(a, b, operator) {
    switch(operator) {
        case '+':
            operator = function(a, b) { return a + b }
            break
        case '-':
            operator = function(a, b) { return a - b }
            break
        case '*':
            operator = function(a, b) { return a * b }
            break
    }

    return a.reduce(function(ret, aa) {
        b.forEach(function(bb) {
            ret.push(operator(aa, bb))
        })

        return ret
    }, []);
}
