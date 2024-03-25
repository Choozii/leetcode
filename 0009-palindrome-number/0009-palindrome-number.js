/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    const xStr = x.toString();
    
    if(xStr.length === 1){
        return true;
    }
    
    return xStr === [...xStr].reverse().join("");
};