/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    
    const map = {}
    dictionary.forEach(char => map[char] = char);
    
    const memo = Array.from(s.length).fill(0);
    
    const recursive = (idx) => {
        
        if(memo[idx] !== undefined){
            return memo[idx];
        }
        
        if(idx === s.length){
            return 0;
        }
        
        let res = 1 + recursive(idx+1);
        
        for(let j=idx;j<s.length;j++){
            if(map[s.slice(idx, j+1)]){
                res = Math.min(res, recursive(j+1));
            }
        }
        
        memo[idx] = res;
        
        return res;
    }
    
    return recursive(0);
};