/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = [];
    arr[0] = 0;
    
    for(let i=1;i<=n;i++){
        let number = i;
       while(number !== 0){
            number &= number-1;
           arr[i] = arr[i]?arr[i]+1:1;
        }  
    }
    
    return arr;
};