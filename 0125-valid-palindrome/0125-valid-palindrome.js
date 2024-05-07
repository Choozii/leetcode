/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0, right = s.length-1;
    
    const isValid = (input) => {
        const regExp = new RegExp(/^[a-z0-9]/i);
        return regExp.test(input);
    }
    
    while(left <= right){
        
        const leftChar = s[left].toLowerCase();
        const rightChar = s[right].toLowerCase();
        
        if(!isValid(leftChar)){
            left++;
            continue;
        }
        if(!isValid(rightChar)){
            right--;
            continue;
        }
        
        if(leftChar === rightChar){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
};