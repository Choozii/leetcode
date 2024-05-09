/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {    
    const openParenthese = [];
    const removeIndex = [];
    
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            openParenthese.push(i);
        }else if(s[i] === ")"){
            openParenthese.length > 0? openParenthese.pop():removeIndex.push(i);
        }
    }
    
    if(openParenthese.length){
        removeIndex.push(...openParenthese);
    }
  
    let res = "";
    
   for(let i=0;i<s.length;i++){
       if(!removeIndex.includes(i)){
           res += s[i];
       }
   }
    
    return res;
};