/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = new Array(n+1);
    dp[0] = 0;
    
    let x = 0;
    let b = 1;
    
    while(b <= n){
        
        //4,5,6,7      
        while(x < b && x+b <= n){
            dp[x+b] = dp[x]+1;
            x++;
        }
        
        x = 0;
        b <<= 1;
    }
    
    return dp;
};