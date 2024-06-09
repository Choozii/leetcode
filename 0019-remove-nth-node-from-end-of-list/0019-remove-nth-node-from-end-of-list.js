/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const ans = new ListNode(null);
    ans.next = head;
    
    let curr = head;
    let len = 0;
    
    while(curr){
        curr = curr.next;
        len++;
    }
    
    len -= n;
    curr = ans;
    
    while(len > 0){
        len--;
        curr = curr.next;
    }
    
    curr.next = curr.next.next;
    
    return ans.next;
};