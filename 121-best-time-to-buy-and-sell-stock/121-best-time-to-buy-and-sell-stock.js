/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let max_profit = 0;
  for(let r=1;r<prices.length;r++){
    if(prices[l] > prices[r]){
        l = r;
    }else{
        max_profit = Math.max(max_profit, prices[r] - prices[l]);
    }
  }
    return max_profit;
};