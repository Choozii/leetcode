/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(!amount){
        return 0;
    }
    
    const count = new Array(amount+1).fill(0);
    
    for(let k=1;k<amount+1;k++){
        if(coins.includes(k)){
            count[k] = 1;
        }else if(coins.every(coin => coin > k)){
            count[k] = -1;
        }else{
            let minCount = Infinity;
            
            coins.map(coin => {
                if(count[k-coin] > 0) {
                    minCount = Math.min(count[k-coin], minCount);                    
            }});
            
            if(minCount !== Infinity){
                count[k] = minCount + 1;            
            }else{
                count[k] = -1;
            }
        }
    }
    
    return count[amount];
};