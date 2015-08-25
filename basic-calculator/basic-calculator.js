/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s) return null

    var rpn = RPN(s)

    var stack = [],
        result = 0,
        s1,
        s2

    rpn.forEach(function(c){
        if ((+c) == c) {
            stack.push(+c)
        } else {
            switch(c) {
                case '+':
                    result = stack.pop() + stack.pop();
                    stack.push(result);
                    break;
                case '-':
                    s1 = stack.pop()
                    s2 = stack.pop()
                    result = s2 - s1;
                    stack.push(result)
                    break;
            }
        }
    })

    return stack[0]
};

function RPN(s) {
    var ret = [];
    var stack = [];

    split(s).forEach(function(c) {
        if (c === '(') {
            stack.unshift(c);
        } else if (c === ')') {
            while (stack[0] !== '(') {
                ret.push(stack.shift());
            }
            // pop '('
            stack.shift();

        } else if (c === '+' || c === '-') {
            if (stack.length === 0 || stack[0] === '(') {
                stack.unshift(c);
            } else {
                ret.push(stack.shift());
                stack.unshift(c);
            }
        } else if ((+c) == c && c !== ' ') {
            ret.push(c);
        }
    });

    while (stack.length !== 0) {
        ret.push(stack.shift());
    }

    return ret;
}

function split(s) {
    var ret = [], number = ''

    for (var i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue
        } else if (+s[i] == s[i]) {
            // number
            number += s[i]
        } else if (number !== '') {
            ret.push(+number)
            number = ''
            ret.push(s[i])
        } else {
            ret.push(s[i])
        }
    }

    if (number) ret.push(+number)

    return ret
}
