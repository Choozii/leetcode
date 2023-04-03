/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //값이 반복되면 false
    
    const calc = (num) => {
        let sum = 0;
        while(num > 0){
            sum += (num%10)**2;
            num = Math.floor(num/10);
        }
        return sum;
    }
    
    const map={};
    let res = n;
    
    while(res !== 1){
        res = calc(res);

        if(map[res]){
            return false;
        }
        map[res] = 1;
    }
    
    return 1;
};