/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.dic = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.dic.has(key)){
        return -1;
    }    
    
    const value = this.dic.get(key);
    this.dic.delete(key);
    this.dic.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.dic.has(key)){
        this.dic.delete(key);
    }
    this.dic.set(key, value);
    if(this.dic.size > this.capacity){
        // console.log(this.dic.keys(), this.dic.keys().next().value);
        this.dic.delete(this.dic.keys().next().value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */