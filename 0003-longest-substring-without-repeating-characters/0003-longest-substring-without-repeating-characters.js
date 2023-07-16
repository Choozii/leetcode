/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    
    for(let i=0;i<s.length;i++){
        const subSet = new Set();
        
        for(let j=i;j<s.length;j++){
            if(!subSet.has(s[j])){
                subSet.add(s[j]);        
            }else{
                break;
            }
        }
        
         maxLen = Math.max(maxLen, subSet.size);
    }
    return maxLen;
};