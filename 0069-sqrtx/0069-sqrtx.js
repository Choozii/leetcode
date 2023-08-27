/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0, right = x;
    
    while(left <= right){
     const mid = Math.floor((left + right)/2);
        if(mid ** 2 <= x && x < (mid+1)**2 ){
            return mid;
        }else if(mid**2 > x){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
};