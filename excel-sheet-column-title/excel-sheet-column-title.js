/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var table = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I',
        10: 'J',
        11: 'K',
        12: 'L',
        13: 'M',
        14: 'N',
        15: 'O',
        16: 'P',
        17: 'Q',
        18: 'R',
        19: 'S',
        20: 'T',
        21: 'U',
        22: 'V',
        23: 'W',
        24: 'X',
        25: 'Y',
        26: 'Z'
    };

    if (convertToTitle[n] !== undefined) return convertToTitle[n];

    var title= '',
        r;

    while (n / 26 > 0) {
        r = n % 26;
        n = Math.floor(n / 26);

        if (r === 0) { r = 26; n--; }
        title = table[r] + title;

    }


    convertToTitle[n] = title;
    return title;
};
