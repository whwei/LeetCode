/**
 * @constructor
 */
var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);

    if (x < this.min) this.min = x;
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var ret = this.stack.pop();

    if (this.min === ret) {
        this.min = Math.min.apply(null, this.stack);
    }

    return ret === undefined ? null : ret;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    var ret = this.stack[this.stack.length - 1];

    return ret === undefined ? null : ret;
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.min === undefined ? null : this.min;
};
