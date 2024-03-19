/**
 * @param {string} s
 * @return {boolean}
 */

/*
input : 문자열
output : palindrome인지 여부
규칙 : 대문자 -> 소문자로 변환, 알파벳이 아닌 문자 제거 후 뒤집어도 똑같으면 회문
*/
var isPalindrome = function(s) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    const newStr = [...s.toLowerCase()].filter(char => char!==" " && (alphabet.includes(char) || Number.isInteger(char*1)));
        
    if(!newStr.length){
        return true;
    }
    
    for(let i=0;i<newStr.length/2;i++){
        if(newStr[i] !== newStr[newStr.length-1-i]){
           return false;
           }
    }
    
    return true;
    
};