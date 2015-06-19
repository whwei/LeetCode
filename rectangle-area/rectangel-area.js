/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var start, end;

    start = {
        x: Math.max(A, E),
        y: Math.min(D, H)
    };
    end = {
        x: Math.min(C, G),
        y: Math.max(B, F)
    };

    var areaA = Math.abs(C - A) * Math.abs(D - B);
    var areaB = Math.abs(G - E) * Math.abs(H - F);
    var overlap;

    if (E >= C || G <= A || B >= H || D <= F)
      overlap = 0;
    else
      overlap = Math.abs(end.x - start.x)  * Math.abs(end.y - start.y);
    console.log(areaA, areaB, overlap, start, end)
    return areaA + areaB - (overlap > 0 ? overlap : 0);
};
