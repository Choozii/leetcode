/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const output = [];
    const pCount = {};
    const sCount = {};
    
    [...p].forEach(char => {
        pCount[char] = pCount[char]?pCount[char]+1:1;
    });
    
    for(let i=0;i<s.length;i++){
        sCount[s[i]] = sCount[s[i]]?sCount[s[i]]+1:1;
        
        if(i >= p.length){
            const mostLeft = s[i-p.length];
            
            if(sCount[mostLeft] === 1){
                delete sCount[mostLeft];
            }else{
                sCount[mostLeft] -= 1;
            }
        }
        
        if(areEqual(pCount, sCount)){
            output.push(i-p.length+1);
        }
    }
    
    return output;
};

const areEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if(keys1.length !== keys2.length){
        return false;
    }
    
    for(let i=0;i<keys1.length;i++){
        const key = keys1[i];
        
        if(obj2[key] !== obj1[key] || !obj2[key]){
            return false;
        }
    }
    
    return true;
}