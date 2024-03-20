/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

/*
input : 두 스트링
output : ransomNote가 magazine로 이루어질 수 있는지 여부 (각 문자는 한번씩만 사용 가능)
*/
var canConstruct = function(ransomNote, magazine) {
    let map = {};
    
    [...magazine].forEach((char) => {
        if(map[char]){
            map = {...map, [char] : map[char] + 1};
        }else{
            map = {...map, [char] : 1};
        }
    });
    
    for(let i=0;i<ransomNote.length;i++){
        if(map[ransomNote[i]] && map[ransomNote[i]] !== 0){
            map = {...map, [ransomNote[i]]:map[ransomNote[i]]-1}
        }else{
            return false;
        }
    }
    
    return true;
};