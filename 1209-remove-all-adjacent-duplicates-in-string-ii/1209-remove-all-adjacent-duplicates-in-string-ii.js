/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    
    for(let i=0;i<s.length;i++){
        if(!stack.length){
            stack.push([s[i], 1]);
            continue;
        }
        
        const [val, count] = stack[stack.length-1];
        if(val === s[i]){
            if(count === k-1){
                stack.pop();
            }else{
                stack[stack.length-1] = [val, count+1];                    
            }
            }else{
                stack.push([s[i], 1]);
            }
        }
    
    let res = ""
    
    for(let i=0;i<stack.length;i++){
        let [char, count] = stack[i];
        while(count-->0){
              res += char;
        }
    }
    
    return res;
};