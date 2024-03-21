/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let p1 = head;
    let p2 = head;
    let len = 0;
    while(p1){
        p1 = p1.next;
        len++;
    }
    
    let moveNum = Math.floor(len/2);
    
    while(moveNum--){
        p2 = p2.next;
    }
    
    return p2;
};