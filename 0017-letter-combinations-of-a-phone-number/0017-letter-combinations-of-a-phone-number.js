/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length){
        return [];
    }
    
    const ans = [];

    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    
    const helper = (input, index) => {
        if(input.length === digits.length){
            ans.push(input);
            return;
        }
        
        const nextDigits = map[digits[index+1]];
        nextDigits.split("").forEach(digit => helper(input+digit, index+1));
    }
    
    map[digits[0]].split("").forEach(digit => helper(digit, 0));
    
    return ans;
};