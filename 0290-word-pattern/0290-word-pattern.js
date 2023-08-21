/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(" ");
    const wordMap = {};
    const included = [];
    
    if(pattern.length > words.length){
        return false;
    }

 for(let i=0;i<words.length;i++){
    if(!wordMap[pattern[i]]){
        if(included.includes(words[i])){
            return false;
        }
        
        wordMap[pattern[i]] = words[i];
        included.push(words[i]);
    }else{
        if(wordMap[pattern[i]] !== words[i]){
            return false;
        }
    }
 }
    return true;
};