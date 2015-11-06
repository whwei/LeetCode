/**
 * @constructor
 */
var MedianFinder = function() {
    this.list = []
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
    // insertion sort
    var i = 0

    for (; this.list[i] <= num && i < this.list.length; i++) {}

    this.list.splice(i, 0, num)
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
    var len = this.list.length

    if (len === 0) return null

    if (len % 2 !== 0) return this.list[Math.floor(len / 2)]

    if (len % 2 === 0) return (this.list[Math.floor(len / 2)] + this.list[Math.floor(len / 2) - 1]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */
