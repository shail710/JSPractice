function specialPalindrome(n , s){
    let str = s.split``;
    
    for(let i = 0; i < s.length; i++){
        let subStr = '';
        if(str[i] === str[i + 1]) {
            subStr = subStr + str[i] + str[i + 1];
            str.push(subStr);
            subStr = '';
        }
    }
}