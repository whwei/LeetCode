/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (!path) return null;

    var dirs = path.split('/');

    var stack = [];

    while (dirs.length > 0) {
        var d = dirs.shift();
        switch(d) {
            case '':
            case '.':
                break;
            case '..':
                stack.pop();
                break;
            default:
                stack.push(d);
        }
    }

    return '/' + stack.join('/');
};
