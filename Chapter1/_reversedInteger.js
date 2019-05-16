// function reversedInterger(n){
//     return Math.sign(n) * 
//                 (
//                     Math.abs(n).toString().split``.reverse().join``
//                 );
// }

function reversedInterger(x){
    let rev = 0;
    while(x !== 0){
        
        rev = rev * 10 + (x % 10);
        x = Math.trunc(x / 10);
        
    }
    return (rev < -2147483648 || rev > 2147483647) ? 0 : rev;
}
