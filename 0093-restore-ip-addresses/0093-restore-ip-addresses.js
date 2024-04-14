/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const output = [];
    
    const helper = (level, ip, index) => {
        if(level === 4){
            if(ip.join("").length !== s.length) return;
            
            output.push(ip.join("."));
            return;
        }
        
        let number = "";
        
        for(let i=index;i<index+3;i++){
           number += s[i];
            if(0 <= Number(number) && Number(number) <= 255){
             if(number[0] === '0' && number !== '0'){
                continue;
             }
                helper(level+1, [...ip, number], i+1);            
            }
        }
    }
    
    helper(0,[],0);
    
    return output;
};