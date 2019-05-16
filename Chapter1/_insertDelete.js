//Leetcode 380

let RandomizedSet = function(){
    this.ds = [];
}

RandomizedSet.prototype.insert = function(val){
    if(this.ds.has(val)) return false;
    else {
        this.ds.add(val);
        return true;
    }
}

RandomizedSet.prototype.remove = function(val){
    return (this.ds.delete(val)) ? true : false;
}

RandomizedSet.prototype.getRandom = function(){
    let list = Array.from(this.ds);
    return list[Math.floor(Math.random() * list.length)];
}

// var RandomizedSet = function() {
//     this.set = [];
//     this.map = {};
//     this.startIndex = 0;
//     this.length = 0;
// };

// RandomizedSet.prototype.insert = function(val) {
//     if (this.map[val] != null) return false;
    
    
//     if (this.startIndex > 0) {
//         this.startIndex -= 1;
//         this.set[this.startIndex] = val;
//         this.map[val] = this.startIndex;
//     } else {
//         this.set.push(val);
//         this.length += 1;
//         this.map[val] = this.length - 1;
//     }
//     return true;
// };

// /**
//  * Removes a value from the set. Returns true if the set contained the specified element. 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
//     if (this.map[val] == null) return false;
    
//     const delIndex = this.map[val];
//     const temp = this.set[this.startIndex];
//     this.set[this.startIndex] = this.set[delIndex];
//     this.set[delIndex] = temp;
    
//     this.startIndex += 1;
//     this.map[temp] = delIndex;
//     delete this.map[val];
    
//     return true;
// };

// /**
//  * Get a random element from the set.
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {
//     const randIndex = Math.floor(Math.random() * (this.length - this.startIndex)) + this.startIndex;
//     return this.set[randIndex];
// }