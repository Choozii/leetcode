/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    
    while(n){
        const number = n % 10;
        sum += number;
        product *= number;
        n = Math.floor(n/10);  
    }
    return product - sum;
};