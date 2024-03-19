/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
input : 소문자로 이루어진 문자열 s, t
output : anagram인지 여부
규칙 : 문자를 재배치해서 다른 문자열과 일치하면 anagram
*/
var isAnagram = function(s, t) {
    return [...s].sort().join("") === [...t].sort().join("");
};