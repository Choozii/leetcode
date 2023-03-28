/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(low % 2 === 0 && high % 2 === 0){
        return (high-low)/2;
    }else if(low % 2 === 0 || high % 2 === 0){
        return (high - low + 1)/2;
    }else{
        return (high-low)/2 + 1;
    }
};