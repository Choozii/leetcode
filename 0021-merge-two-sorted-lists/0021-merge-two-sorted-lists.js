/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
input : 정렬된 링크드 리스트 2개
output : 하나의 정렬된 링크드 리스트 (2개를 연결)의 헤드 노드

*/

var mergeTwoLists = function(list1, list2) {
   const merged = new ListNode(0, null);
   let current = merged;
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            current.next = list1;
            list1 = list1.next;
        }else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1?list1:list2;

    return merged.next;
};