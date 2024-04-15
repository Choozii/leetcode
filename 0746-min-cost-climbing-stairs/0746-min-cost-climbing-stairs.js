/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let x = 0, y = 0;
    
    for(let i=2;i<=cost.length;i++){
        const result = Math.min(y+cost[i-1], x+cost[i-2]);
        x = y;
        y = result;
    }

    return y;
};