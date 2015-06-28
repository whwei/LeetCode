/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if (gas.length === 1) return gas[0] >= cost[0] ? 0 : -1;

    var start = 0,
        nextStart = 0,
        i = 1,
        count = 0,
        tank = gas[0];

    // try at most gas.length station
    while (start < gas.length) {
        // i catches start, check the last station
        if (i === start) {
            if (tank - cost[prev(i)] >= 0) {
                return start;
            } else {
                return -1;
            }
        }

        if(tank < cost[prev(i)]) {
            if (start === gas.length - 1) return -1;
            // try next or the largest i station to start
            start = Math.max(nextStart, start + 1);
            i = start;
            tank = gas[start];
            count = 0;
        } else {
            tank -= cost[prev(i)];
            tank += gas[i];

            // record largest i which can be start point
            if (gas[i] >= cost[prev(i)] && i > start)
                nextStart = i;
        }
        i = next(i);
        count++;
    }

    return -1;

    function next(i){
        return (i + 1) % gas.length;
    }
    function prev(i) {
        return (gas.length + i - 1) % gas.length;
    }
};
