/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const countStack = [];
    const wordStack = [];
    let res = "";
    let numberStr = "";
    
    for(let i=0;i<s.length;i++){
     if(Number.isInteger(s[i]*1)){
         numberStr += s[i];

         if(s[i+1] === "["){
            countStack.push(numberStr*1);
             numberStr = ""; //init
         }
     }else if(s[i] === "["){
         wordStack.push("");
     }else if(s[i] === "]"){
         let count = countStack.pop();
         const word = wordStack.pop();
         
         if(wordStack.length > 0){
            while(count-- > 0){
                wordStack[wordStack.length-1] += word;
            }  
         }else{   
             while(count-- > 0){
                 res += word;
             }    
         }
     }else{
         if(wordStack.length > 0){
             wordStack[wordStack.length-1] += s[i];
         }else{
             res += s[i];
         }
     }
    }
    
   return res;
};