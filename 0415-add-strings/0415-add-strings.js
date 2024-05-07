/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let ptr1 = num1.length-1, ptr2 = num2.length-1;
    let carry = 0;
    const ans = [];
    
    while(ptr1 >= 0 && ptr2 >= 0){
        const sum = Number(num1[ptr1]) + Number(num2[ptr2]) + carry;
        carry = Math.floor(sum / 10);
        ans.push(sum % 10);
        ptr1--;
        ptr2--;
    }
    
    while(ptr1 >= 0){
        const sum = Number(num1[ptr1]) + carry;
        carry = Math.floor(sum / 10);
        ans.push(sum % 10);
        ptr1--;
    }
    
    while(ptr2 >= 0){
        const sum = Number(num2[ptr2]) + carry;
        carry = Math.floor(sum / 10);
        ans.push(sum % 10);
        ptr2--;
    }
    
    if(carry){
        ans.push(carry);
    }
    
    ans.reverse();
    return ans.join("");
};