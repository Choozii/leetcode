/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const getTrimmed = (str) => {
        let ptr = str.length - 1;
        let shopCnt = 0;
        let res = "";
        
        while(ptr >= 0){
            if(str[ptr] === "#"){
                shopCnt++;
            }else if(shopCnt > 0){
                shopCnt--;
            }else{
                res += str[ptr];
            }
            ptr--;
        }
        return res;
    }
    
    const sStr = getTrimmed(s);
    const tStr = getTrimmed(t);
    
    return sStr === tStr;
};