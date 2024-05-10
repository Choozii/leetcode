/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const output = [];
    /*
        pCount === sCount -> update the output list
    */
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
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    
    let res = true;
    
    Object.keys(obj1).forEach(key => {
        if(!obj2[key] || obj2[key] !== obj1[key]){
            res = false;
    }});
    
    return res;
}