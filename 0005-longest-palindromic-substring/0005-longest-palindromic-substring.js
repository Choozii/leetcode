/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  
    let res = "";
    
    const isPalindrome = (str) => {
      let l = 0, r = str.length - 1;
      
      while(l<r){
          if(str[l] !== str[r]){
              return false;
          }
          l++;
          r--;
      }
      
      return true;
  }
    
    for(let i=0;i<s.length+1;i++){
        for(let j=i;j<s.length+1;j++){
            const subStr = s.substring(i,j);
            if(isPalindrome(subStr)){
                if(subStr.length >= res.length){
                    res = subStr;
                }
            }
        }
    }
    
    return res;
    
};