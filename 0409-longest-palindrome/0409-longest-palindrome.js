/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {};
    let count = 0;
    
    [...s].forEach((char) => {
        map[char] = map[char]?map[char]+1 : 1
    });
    
    Object.entries(map).map(([key,value]) => {
        if(value >= 2){
            const valueCount = Math.floor(value/2) * 2;
            count += valueCount;
            map[key] -= valueCount;
            
            if(map[key] === 0){
                delete map[key];
            }
        }
    });
    
    if(count % 2 === 0 && Object.keys(map).length > 0){
        count++;
    }
    
    return count;
};