/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/*
input : 링크드 리스트
output : 사이클이 있는지 여부
규칙 : next 포인터를 따라가다보면 다시 노드를 만날 때 사이클이 있다고 판단
*/
var hasCycle = function(head) {
    
    let fast = head;
    let slow = head;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast){
            return true;
        }
    }
    
    return false;  
};