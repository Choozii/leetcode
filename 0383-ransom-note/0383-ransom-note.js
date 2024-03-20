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
    const map = {};
    
    [...magazine].forEach((char) => {
        map[char] = map[char] ? map[char]+1 : 1;
    });
    
    for(let i=0;i<ransomNote.length;i++){
        if(!map[ransomNote[i]]) return false;
        if(map[ransomNote[i]] === 0) return false;
        
        map[ransomNote[i]] -= 1;
    }
    
    return true;
};