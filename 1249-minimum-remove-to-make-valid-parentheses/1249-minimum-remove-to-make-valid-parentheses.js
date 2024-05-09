/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {    
    const openParenthese = [];
    const removeIndex = {};
    
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            openParenthese.push(i);
        }else if(s[i] === ")"){
            if(openParenthese.length > 0){
                openParenthese.pop();
            }else{
                removeIndex[i] = true;
            }
        }
    }
    
    while(openParenthese.length > 0){
        const i = openParenthese.pop();
        removeIndex[i] = true;
    }
  
    let res = "";
    
   for(let i=0;i<s.length;i++){
       if(!removeIndex[i]){
           res += s[i];
       }
   }
    
    return res;
};