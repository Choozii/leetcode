/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const result = new Array(cost.length+2).fill(0);
    
    for(let i=2;i<=cost.length;i++){
        result[i] = Math.min(result[i-1]+cost[i-1], result[i-2]+cost[i-2])
    }

    return result[cost.length];
};