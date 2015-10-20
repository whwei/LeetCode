/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (!tokens) return 0

    var stack = [],
        c,
        op1,
        op2

    stack.push(+tokens.shift())

    while(tokens.length) {
              
        c = tokens.shift()

        if (isOperator(c)) {  
            op2 = +stack.pop()
            op1 = +stack.pop()

            if (typeof op1 !== 'number' || typeof op2 !== 'number') return 0

            stack.push(calc(c, op1, op2))
        } else {
            stack.push(c)
        }
    }
    return stack[0]
};

function isOperator(c) {
    return c === '+' || c === '-' || c === '*' || c === '/'
}

function calc(operator, op1, op2) {
    switch(operator) {
        case '+':
            return op1 + op2
            break
        case '-':
            return op1 - op2
            break
        case '*':
            return op1 * op2
            break
        case '/':
            return op1 / op2 >= 0 ? Math.floor(op1 / op2) : Math.ceil(op1 / op2)
            break
    }

    return 0
}


