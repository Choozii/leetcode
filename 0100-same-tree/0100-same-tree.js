/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q){
        return true;
    }
   
 
    const queue_p = [p];
    const queue_q = [q];
    
    while(queue_p.length || queue_q.length){
        const now_p = queue_p.pop();
        const now_q = queue_q.pop();
        
        if(now_p?.val !== now_q?.val){
            return false;
        }else{
            if(now_p.left || now_q.left){
                if(now_p.left && now_q.left){
                    queue_p.push(now_p.left);
                    queue_q.push(now_q.left);    
                }else{
                    return false;
                }
            }
           if(now_p.right || now_q.right){
                if(now_p.right && now_q.right){
                    queue_p.push(now_p.right);
                    queue_q.push(now_q.right);    
                }else{
                    return false;
                }
            }
        }
    }
    
    return true;
};