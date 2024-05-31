/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
class MaxHeap{
    constructor(capacity){
        this.capacity = capacity;
        this.q = [];
    }
    
    enqueue(val){
        this.q.push(val);
        this.bubbleUp();
        
        // console.log('after bubbleUp', this.q);
        
        if(this.q.length > this.capacity){
            this.dequeue();
        }
    }
    
    bubbleUp(){
        let currentIdx = this.q.length - 1;
        
        while(currentIdx > 0){
            const current = this.q[currentIdx];
            const parentIdx = Math.floor((currentIdx - 1)/2);
            const parent = this.q[parentIdx];
            
            // console.log('current', current);
            // console.log('parent', parent);
            
            if(parent < current){
                this.swap(currentIdx, parentIdx);
                currentIdx = parentIdx;
            }else{
                break;
            }
        }
    }
    
    dequeue(){
        const value = this.q[0];
        this.q[0] = this.q.pop();
        this.sinkDown();
        return value;
    }
    
    sinkDown(){
        let currentIdx = 0;
        const len = this.q.length;
        
        while(currentIdx < len){
            const current = this.q[currentIdx];
            const leftChildIdx = (2 * currentIdx) + 1;
            const rightChildIdx = leftChildIdx + 1;
            
            let biggerIdx;
            
            if(leftChildIdx < len){
                const leftChild = this.q[leftChildIdx];
                if(current < leftChild){
                    biggerIdx = leftChildIdx;
                }
            
            if(rightChildIdx < len){
                const rightChild = this.q[rightChildIdx];
                if((biggerIdx === undefined && current < rightChild) 
                    || (biggerIdx !== undefined && rightChild > leftChild)) {
                    biggerIdx = rightChildIdx;
                }
            }
            }
            
            if(biggerIdx === undefined){
                break;
            }
            
            this.swap(currentIdx, biggerIdx);
            currentIdx = biggerIdx;
        }
    }
    
    swap(idx1, idx2){
        [this.q[idx1], this.q[idx2]] = [this.q[idx2], this.q[idx1]];
    }
    
}

var kthSmallest = function(root, k) {
  //k max heap  
    const mh = new MaxHeap(k);
    
    const q = [root];
    
    while(q.length > 0){
        const curr = q.shift();
        mh.enqueue(curr.val);
        
        // console.log('mh', mh);
        
        if(curr?.left){
            q.push(curr.left);      
        }
        
        if(curr?.right){
           q.push(curr.right);
        }
    }
    
    return mh.dequeue();
};