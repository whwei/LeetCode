/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0;

    var primes = countPrimes.primes || [];

    for (var i = 2; i < n ; i++) {

        if (!primes[i]) count++;

        for (var j = 2; i * j < n; j++) {
            primes[i * j] = true;
        }
    }

    countPrimes.primes = primes;

    return count;
};
