/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    s = s.split('');

    var i = 0,
        len = s.length;

    for (; i < len; i++) {
        switch(s[i]) {
            case '[':
            case '{':
            case '(':
                stack.push(s[i]);
                break;
            case ']':
                if (stack[stack.length - 1] === '[')
                    stack.pop();
                else
                    return false;
                break;
            case '}':
                if (stack[stack.length - 1] === '{')
                    stack.pop();
                else
                    return false;
                break;
            case ')':
                if (stack[stack.length - 1] === '(')
                    stack.pop();
                else
                    return false;
                break;
            default:
                return false;

        }
    }

    return stack.length === 0;
};
