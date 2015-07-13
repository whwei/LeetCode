/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var table = [
                ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                ["M", "MM", "MMM", "MMMM", "", "", "", "", ""]
                ]

    var ret = ''
    for (var i = 0; num !== 0; i++, num = Math.floor(num / 10)) {
        if (num % 10 === 0) continue;

        ret = table[i][Math.floor(num % 10) - 1] + ret;
    }

    return ret
};
