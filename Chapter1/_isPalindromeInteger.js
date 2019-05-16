// var isPalindrome = function(x) {
//     if(x < 0) return false;
//     if(x < 10) return true;
//     let rev = 0;
//     while(x !== 0){
//         rev = rev * 10 + (x % 10);
//         x = Math.trunc(x / 10);
//     }
    
//     return (x === rev) ? true : false;
// };

function isPalindrome(x){
    if(x < 0) return false;
    if(x < 10) return true;
    let  rev = parseInt(x.toString().split``.reverse().join``);
    return (x === rev) ? true : false;
}