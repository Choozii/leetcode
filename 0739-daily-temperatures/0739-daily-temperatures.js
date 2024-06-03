/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const ans = [];
    const stack = [];
    
    for(let i=temperatures.length-1;i>=0;i--){
        if(stack.length === 0){
            stack.push([temperatures[i], i]);
            ans[i] = 0;
            continue;
        }
        
        while(true){
            if(stack.length === 0){
                ans[i] = 0;
                stack.push([temperatures[i], i]);
                break;
            }
            
            const [stackValue, stackIdx] = stack[stack.length-1];
            
            if(stackValue <= temperatures[i]){
                stack.pop();
            }else{
                ans[i] = stackIdx - i;
                stack.push([temperatures[i], i]);
                break;
            }    
        }
    }
    
    return ans;
};