var maxProfit = function(prices) {
    let minSoFar = prices[0], maximumProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i]);
        maximumProfit = Math.max(maximumProfit, prices[i] - minSoFar)
    }
    return maximumProfit;
};