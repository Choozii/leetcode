/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length+1).fill(false);
    dp[0] = true;
    
    for(let i=1;i<s.length+1;i++){
        for(let j=0;j<wordDict.length;j++){
            const word = wordDict[j];
            
            if(s.slice(i-word.length, i) === word){
                dp[i] = dp[i-word.length];
            }
            
            if(dp[i]){
                break;
            }
        }
    }
    
    return dp[s.length];
};