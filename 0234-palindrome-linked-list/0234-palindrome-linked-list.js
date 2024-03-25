/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
input : linked list
output : palindrome인지 여부
*/
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let curr = slow.next;
    let next = null;
    let prev = slow;
    prev.next = null;
    
  
    while(curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    let tail = prev;
    
    while(tail){
        if(head.val !== tail.val){
            return false;
        }
        
        head = head.next;
        tail = tail.next;
    }
    
    return true;
};