/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1:28
class MinHeap{
    constructor(capacity){
        this.q = [];
        this.capacity = capacity;
    }
    
    getValues(){
        return this.q;
    }
    
    enqueue(val){
        // console.log(this.q);
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
        
        while(currentIdx > 0){
            const current = this.q[currentIdx][1];
            const parentIdx = Math.floor((currentIdx-1)/2);
            const parent = this.q[parentIdx][1];
            
            if(current < parent){
                this.swap(currentIdx, parentIdx);
                currentIdx = parentIdx;
            }else{
                break;
            }
        }
    }
    
    sinkDown(){
        let currentIdx = 0;
        const len = this.q.length;
        
        while(currentIdx < len){
            const leftChildIdx = (currentIdx * 2) + 1;
            const rightChildIdx = leftChildIdx + 1;
        
            const current = this.q[currentIdx][1];
        
            let smallerIdx;
        
            if(leftChildIdx < len){
                const leftChild = this.q[leftChildIdx][1];

                if(leftChild < current){
                    smallerIdx = leftChildIdx;
                }
                
                if(rightChildIdx < len){
                    const rightChild = this.q[rightChildIdx][1];

                    if((smallerIdx === undefined && rightChild < current) || 
                        smallerIdx !== undefined && rightChild < leftChild){
                        smallerIdx = rightChildIdx;
                    }
                }
            }
        
            if(smallerIdx === undefined){
                return;
            }
            
            this.swap(smallerIdx, currentIdx);
            currentIdx = smallerIdx;
        }
    }
    
    swap(idx1, idx2){
        [this.q[idx1], this.q[idx2]] = [this.q[idx2], this.q[idx1]];
    }
}

var topKFrequent = function(nums, k) {
    const mh = new MinHeap(k);
    const map = {};
    nums.forEach(num => {
        map[num] = map[num]?map[num]+1:1
    });
    
    Object.entries(map).forEach(value => mh.enqueue(value)); //[key,count]
    
    return mh.q.map(([k,v]) => k);
};