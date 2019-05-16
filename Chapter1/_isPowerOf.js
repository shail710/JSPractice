function isPowerOfThree(n){
    //Number.toString(radix) method returns a string representing the specified Number object to the base of the passed radix(optional)
    //radix can be between 2 - 36
    return (n.toString(3).replace(/0/g , '') === '1');
}

function isPowerOfThree(n){
    return (Math.log10(n) / Math.log10(3) % 1 === 0);
}
