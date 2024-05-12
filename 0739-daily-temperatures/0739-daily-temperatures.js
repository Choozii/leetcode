/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {    
    const stack = [[temperatures[temperatures.length-1], temperatures.length-1]];
    const output = [0];
    
    for(let i=temperatures.length-2;i>=0;i--){
        while(stack.length>0){
            const [val, idx] = stack[stack.length - 1];
            
                if(val <= temperatures[i]){
                    stack.pop();
                }else{
                    stack.push([temperatures[i], i]);
                    output.push(idx-i);
                    break;
                }      
        }
        
        if(stack.length === 0){
            stack.push([temperatures[i], i]);
            output.push(0);
        }
    }
    
    return output.reverse();
};