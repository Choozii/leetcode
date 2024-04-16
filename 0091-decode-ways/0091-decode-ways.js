/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const memo = {}
    
    const helper = (index, str) => {
        if(memo[index]){
            return memo[index];
        }
        
        if(index === str.length){
            return 1;
        }
        
        if(str[index].startsWith('0')){
            return 0;
        }
        
        if(index === s.length-1){
            return 1;
        }
        
        let ans = helper(index+1, s);
        
        if(Number(s.substring(index, index+2))<=26){
            ans += helper(index+2, s);
        }
        
        memo[index] = ans;
        return ans;
    }
    
    return helper(0, s);
};