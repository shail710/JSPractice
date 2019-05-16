function plusOne(array){
    let result = []; 
    let carry = 1; 
    let n = array.length - 1;
    
    for(i = n; i >= 0; i--){
        sum = (carry + array[i]) % 10;
        carry = Math.floor((carry + array[i]) / 10); 
        result[n] = sum;
        n--;
    }
    if(carry!==0) result.unshift(carry); 
    return result;
}