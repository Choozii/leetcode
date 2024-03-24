/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;
    
    for(let i=0;i<prices.length;i++){
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(prices[i] - min, maxProfit)    
    }
    
    return maxProfit;
};