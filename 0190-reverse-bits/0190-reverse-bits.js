/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let power = 31;
    let ret = 0;
    
    while(n > 0){
        const right = n & 1;
        ret = ret | (right << power);
        power--;
        n = n >>> 1;
    }
    
    return ret >>> 0;
};