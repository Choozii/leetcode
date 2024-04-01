/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const isToken = (char) => ['+','-','*','/'].includes(char);
    const stack = [];

    let curr = 0;
    
    while(curr < tokens.length){
        if(!isToken(tokens[curr])){
            stack.push(tokens[curr]);
            curr++;
            continue;
        }   
        
        const operator = tokens[curr];
        const num2 = Number(stack.pop());
        const num1 = Number(stack.pop());
        
        let result;
        
        switch(operator){
            case "+" :
                result = num1 + num2;
                break;
            case "-" : 
                result = num1 - num2;
                break;
            case "*" : 
                result = num1 * num2;
                break;
            case "/" : 
                result = Math.trunc(num1 / num2);
                break;
        }
        
        stack.push(result);
        curr++;
    }
        
    return stack.pop();
};