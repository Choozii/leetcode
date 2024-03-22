/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let s1="", s2="";
    
    for(let i=0;i<s.length;i++){
        s1 = s[i] === "#"? s1.substring(0, s1.length-1) : s1+=s[i];
    }
    
    for(let i=0;i<t.length;i++){
        s2 = t[i] === "#"? s2.substring(0, s2.length-1) : s2+=t[i];
    }
            
    return s1 === s2;
};