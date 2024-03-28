/**
 * @param {string[]} strs
 * @return {string}
 */

/*
input : 문자열 배열
output : 가장 긴 공통 prefix
constraint : 공통 prefix가 없다면 ""를 리턴, 스트링 배열 길이 : 최대 200
*/

var longestCommonPrefix = function(strs) {

    let common = strs[0];
    
   for(let i=1;i<strs.length;i++){
       const longer = common.length > strs[i].length?common:strs[i];
       const shorter = longer === common?strs[i]:common;
       
       common = "";
       
       for(let i=0;i<shorter.length;i++){
           if(longer[i] === shorter[i]){
               common += longer[i];
           }else{
               break;
           }
       }
   }
    
    return common;
};