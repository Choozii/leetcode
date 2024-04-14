/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
    
    if(!digits){
        return [];
    }

    const letterMap = {
    2 : ["a", "b", "c"],
    3 : ["d", "e", "f"],
    4 : ["g", "h", "i"],
    5 : ["j", "k", "l"],
    6 : ["m", "n", "o"],
    7 : ["p", "q", "r", "s"],
    8 : ["t", "u", "v"],
    9 : ["w", "x", "y", "z"]
    }

    const result = [];

    
    const helper = (index, str) => {
        if(index === digits.length){
            result.push(str);
            return;
        }
        
        const chars = letterMap[digits[index]];
        
        for(let i=0;i<chars.length;i++){
            helper(index+1, str+chars[i]);
        }
    }
    
    helper(0, "");
    
    return result;
};