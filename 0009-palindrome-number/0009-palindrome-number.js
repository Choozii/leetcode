/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    let number = x;
    const numbers = [];
    
    while(number){
        numbers.push(number % 10);
        number = Math.floor(number/10);
    }
    
    let left = 0, right = numbers.length-1;
    
    while(left <= right){
        if(numbers[left] !== numbers[right]){
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
};