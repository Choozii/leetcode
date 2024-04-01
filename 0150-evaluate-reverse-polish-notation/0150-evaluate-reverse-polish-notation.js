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
            stack.push(tokens[curr++]);
            continue;
        }   
        
        const operator = tokens[curr];
        const num2 = Number(stack.pop());
        const num1 = Number(stack.pop());
        
        switch(operator){
            case "+" :
                stack.push(num1 + num2);
                break;
            case "-" : 
                stack.push(num1 - num2);
                break;
            case "*" : 
                stack.push(num1 * num2);
                break;
            case "/" : 
                stack.push(Math.trunc(num1 / num2));
                break;
        }
        curr++;
    }
        
    return stack.pop();
};