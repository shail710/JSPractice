//characteristic of Palindrome strings: 
//*if the string is palindrome with odd number of characters in it, there is only 1 non-repeating char
//*if the string is palindrome with even number of characters in it, there is no non-repeating char

//Time and Space Complexity = O(N)

function palindromePermutation(str){
    if(!str) return false;

    const charMap = new Set();

    for(let char of str){
        if(char !== ' '){
            if(charMap.has(char)) charMap.delete(char)
            else charMap.add(char);
        }
    }
    return charMap.size <= 1;
}