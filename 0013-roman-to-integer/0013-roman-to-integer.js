/**
 * @param {string} s
 * @return {number}
 */
/*
- 규칙
- 로마 숫자는 큰 숫자가 왼쪽, 작은 숫자가 오른쪽으로 와서 더하면 값이 됨
- 빼기가 적용되는 경우 존재
  1. V(5)와 X(10) 앞에는 I가 올 수 있음
  2. L(50)과 C(100) 앞에는 X(10)이 올 수 있음
  3. D(500)과 M(1000) 앞에는 C(100)이 올 수 있음
*/

var romanToInt = function(s) {
    
    const romanToInt = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }
    
    const subsRomanToInt = {
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,
        "CD" : 400,
        "CM" : 900
    }
    
    let ret = 0;
    let restStr = ""
    
    for(let i=0;i<s.length;i++){
        if(subsRomanToInt[s.slice(i,i+2)]){
            console.log(s.slice(i,i+2));
            ret += subsRomanToInt[s.slice(i,i+2)];
            i++;
        }else{
            restStr += s[i];
        }
    }
    
    console.log(restStr);
    for(let i=0; i<restStr.length;i++){
        ret += romanToInt[restStr[i]];
    }
    
    return ret;
};