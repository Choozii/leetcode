/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    
    for(let i=0;i<s.length;i++){
        stack.length >0 && s[i] === stack[stack.length-1]
        ? stack.pop()
        : stack.push(s[i]);
    }
    
    return stack.join("");
};