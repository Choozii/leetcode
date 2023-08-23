/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let currentGroup = [];
    
    const isAnagram = (currentGroup, str) =>{
        const first = currentGroup[0];

        if(first.length !== str.length){
            return false;
        }
        
        const map = {};
        for(let i=0;i<first.length;i++){
            if(map[first[i]]){
                map[first[i]] = map[first[i]] + 1;
            }else{
                map[first[i]] = 1;
            }
        }
        
        for(let i=0;i<str.length;i++){
            if(!map[str[i]]){
                return false;
            }else{
                if(map[str[i]] === 1){
                    delete map[str[i]];
                }else{
                    map[str[i]] = map[str[i]]-1;                    
                }
            }
        }
                
        if(Object.keys(map).length === 0){
            return true;
        }else{
            return false;
        }
    } 
    
    for(let str of strs){
        let flag = false;
        
        for(let i=0;i<currentGroup.length;i++){
            if(isAnagram(currentGroup[i], str)){
                flag = true;
                currentGroup[i].push(str);
                break;
            }
        }
        
        if(!flag){
            currentGroup = [...currentGroup, [str]]
        }    
    }
    
    return currentGroup;
};