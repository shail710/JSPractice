//Leetcode 284

class iterator {
    constructor(arr){
        this.arr = arr;
        this.nextPointer = 0;
        this.peekPointer = 0;
    }

    next(){
        if(this.nextPointer >= this.arr.length) return false;

        let result = this.arr[this.nextPointer];
        this.nextPointer++;
        this.peekPointer++;

        return result;
    }

    peek(){
        if(this.peekPointer >= this.arr.length) return false;
        return this.arr[this.peekPointer]
    }

    hasNext(){
        return (this.peek()) ? true : false;
    }
}

let itt = new iterator([1,2,3]);