/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let x = 0, y = 0;
    
    for(let i=2;i<=cost.length;i++){
        const costX = cost[i-2];
        const costY = cost[i-1];
        const result = Math.min(y+costY, x+costX);
        x = y;
        y = result;
    }

    return y;
};