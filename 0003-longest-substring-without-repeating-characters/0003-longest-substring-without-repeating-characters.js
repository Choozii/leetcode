/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(!s.length){
        return 0;
    }
    
    let start = 0, end = 0;
    const indexMap = {};
    indexMap[s[start]] = start;
    
    let maxLength = 1;
    
    while(end < s.length){
        const prevStr = s.slice(start, end+1);
        end++;
        
        if(end >= s.length){
            break;
        }

        if(prevStr.includes(s[end])){
            start = indexMap[s[end]] + 1;
        }
                
        maxLength = Math.max(maxLength, end - start + 1);
        indexMap[s[end]] = end;
    }
    
    return maxLength;
};