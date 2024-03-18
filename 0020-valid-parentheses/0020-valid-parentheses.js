/**
 * @param {string} s
 * @return {boolean}
 */

/*
1. 인풋 : 괄호로 이루어진 스트링
2. 아웃풋 : 해당 괄호 문자열 문법이 유효한지 여부
3. 규칙 : 같은 괄호로 닫히기, 열고닫히는 순서도 중요

제일 늦게 나타난 요소가 제일 빨리 닫혀야 하는 규칙이 있다 -> stack 사용하기
1. s 반복문 순회
2. 열리는 괄호 만났을 때는 stack에 push
3. 닫히는 괄호 만났을 때는 stack에서 pop -> 닫히는 괄호가 열리는 괄호와 짝이 맞는지 확인하는 로직. 안맞다면 false 리턴
3-1. 짝이 맞는지 여부는 map으로 가지고 있으면 될듯 {닫히는 괄호 : 열리는 괄호}
4. 반복문 순회 후에 남은 원소가 없는 경우 true 리턴
*/
var isValid = function(s) {
    const brackets = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }
    
    const isOpenBracket = (input) => ["(", "{", "["].includes(input); 
    const stack = [];
    
    for(let i=0;i<s.length;i++){
        const ele = s[i];
    
        if(isOpenBracket(ele)){
            stack.push(ele);
        }else{
            const openBracket = stack.pop();
            
            if(brackets[ele] !== openBracket){
                return false;
            }
        }
    }
    
    return stack.length === 0;
};