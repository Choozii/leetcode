/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let finding = true;
  let index = 0;
    
  while(finding){
    if(index**2 <= x && x < (index+1)**2){
        finding = false;
    }else{
        index++;
    }
  }
    
  return index;
};