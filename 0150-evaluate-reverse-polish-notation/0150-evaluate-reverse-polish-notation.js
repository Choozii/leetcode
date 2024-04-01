/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const isToken = (char) => ['+','-','*','/'].includes(char);

    let curr = 0;
    
    while(tokens.length>1){
        if(!isToken(tokens[curr])){
            curr++;
            continue;
        }   
        
        const operator = tokens[curr];
        const num1 = Number(tokens[curr-2]);
        const num2 = Number(tokens[curr-1]);
        
        switch(operator){
            case "+" :
                tokens[curr] = num1 + num2;
                break;
            case "-" : 
                tokens[curr] = num1 - num2;
                break;
            case "*" : 
                tokens[curr] = num1 * num2;
                break;
            case "/" : 
                tokens[curr] = Math.trunc(num1 / num2);
                break;
        }
        tokens.splice(curr-2, 2);
        curr=-1;
    }
    
    return tokens[0];
};