/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /*
    input : string s
    output : 반복 없는 longest substring length 
    
    s = "abcabcbb"
         ---
          ---
           ---
            ---
              --
    
    substring이라는 변수에 * 지금까지 없었던 char이라면 추가*
    maxLength에 Math.max로 계속 저장
    - 만약에 있는 char이라면?
      - n번째 글자와 겹친다면, 기존 n번째까지 삭제하고 새로운 글자 넣어버리기
    */
    
    let substring = "";
    let maxLength = 0;
    
    for(let i=0;i<s.length;i++){
        if(!substring.includes(s[i])){
            substring += s[i];
        }else{
            const idx = substring.indexOf(s[i]);
            substring = substring.slice(idx+1, substring.length) + s[i];
        }
        maxLength = Math.max(substring.length, maxLength);
    }
    
    return maxLength;
};