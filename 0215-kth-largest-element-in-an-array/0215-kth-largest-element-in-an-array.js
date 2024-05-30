/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const mh = new MinHeap(k);
    
    for(let i=0;i<nums.length;i++){
        mh.enqueue(nums[i]);
    }
    
    // console.log(mh);
    return mh.dequeue();
};

class MinHeap{
    constructor(capacity){
        this.q = [];
        this.capacity = capacity;
    }
    
    enqueue(val){
        this.q.push(val);
        this.bubbleUp();
        if(this.q.length > this.capacity){
            this.dequeue();
        }
    }
    
    dequeue(){
        const value = this.q[0];
        this.q[0] = this.q.pop();
        this.sinkDown();
        return value;
    }
    
    bubbleUp(){
        let currentIdx = this.q.length - 1;
        // console.log('currentIdx',currentIdx);
        while(currentIdx > 0){
            const current = this.q[currentIdx];
            const parentIdx = Math.floor((currentIdx-1)/2);
            const parent = this.q[parentIdx];
            
            // console.log('=======');
            // console.log('current',current);
            // console.log('parentIdx',parentIdx);
            // console.log('parent',parent);
            // console.log('=======');

            
            if(current < parent){
                this.swap(currentIdx, parentIdx);
                // console.log("After swap : ", this.q);
                currentIdx = parentIdx;
                // console.log("After swap currentIdx : ", currentIdx);
            }else{
                break;
            }
        }
    }
    
    sinkDown(){
        let currentIdx = 0;
        const len = this.q.length;
        
        while(currentIdx < len){
            
            const current = this.q[currentIdx];
            const leftChildIdx = (2 * currentIdx) + 1;
            const rightChildIdx = leftChildIdx + 1;
            const leftChild = this.q[leftChildIdx];
            const rightChild = this.q[rightChildIdx];
        
              let smallerIdx;
        
              if(leftChildIdx < len){
                 if(leftChild < current){
                    smallerIdx = leftChildIdx;                         
                 }
                  //smallerIdx undefined, rightChild < leftChild, rightChild > leftChild
                if(rightChildIdx < len){
                    if((smallerIdx !== undefined && rightChild < this.q[smallerIdx]) || (smallerIdx === undefined && rightChild < current)){
                        smallerIdx = rightChildIdx;
                    }
                }
            }
            if(smallerIdx !== undefined){
                this.swap(smallerIdx, currentIdx);
                currentIdx = smallerIdx;
            }else{
                break;
            }
              
        }
    }
        
    swap(idx1, idx2){
        [this.q[idx1], this.q[idx2]] = [this.q[idx2], this.q[idx1]];
    }
}