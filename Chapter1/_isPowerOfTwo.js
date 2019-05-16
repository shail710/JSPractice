var isPowerOfTwo = function(n) {
return (Math.log2(n) % 1 === 0);
};

//starting from ES6.

function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}