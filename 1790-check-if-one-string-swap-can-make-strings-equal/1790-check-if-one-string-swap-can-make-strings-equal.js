/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const diff = [];
    
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            diff.push(i);
        }
        if(diff.length>2){
            return false;
        }
    }
    if(s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]){
        return true;
    }
    
    return false;
};