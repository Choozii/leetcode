/**
 * @param {number} n
 * @return {number[]}
 */


const isPwoOfTwo = (number) => {
    return !(number & (number-1))
}
var countBits = function(n) {
    if(n === 0){
        return [0];
    }
    
    const dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    
    let closest = 0;
    
    for(let i=2;i<=n;i++){
        if(isPwoOfTwo(i)){ 
            dp[i] = 1;
            closest = i;
        }else{
            dp[i] = dp[closest] + dp[i-closest];
        }
    }
    
    return dp;
};