/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || strs.length === 0) return [];
    if (strs.length === 1) return [strs];

    var map = {},
        key;

    strs.forEach(function(str, i) {
        key = str.split('').sort().join('');
        if (map[key] === undefined) map[key] = [];

        insert(map[key], str);
    });

    return Object.keys(map).reduce(function(result, key) {
        result.push(map[key]);
        return result;
    }, []);
};


function insert(arr, item) {
    if (arr.length === 0) {
        arr.push(item);
    } else {
        var i = arr.length - 1;
        for (; i >= 0; i--) {
            if (i === 0 && arr[i] > item) {
                arr.unshift(item);
                break;
            } else if (arr[i] <= item) {
                arr.splice(i + 1, 0, item);
                break;
            }
        }
    }
}
