/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = {}
    
    const helper = (idx) => {
        if(memo[idx] !== undefined){
            return memo[idx];
        }
        
        if(idx === s.length){
            memo[idx] = true;
            return true;
        }
        
        for(let i=0;i<wordDict.length;i++){
            const word = wordDict[i];
            if(s.slice(idx, idx+word.length) === word){
                if(helper(idx+word.length)) {
                    return true;
                }
            }
        }
        
    memo[idx] = false;
    return false;
    }
    
    return helper(0);
};