//Hackerank
// Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
// It is also valid if he can remove just 1 character at 1 index in the string, 
// and the remaining characters will occur the same number of times. 
// Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

// For example, if s = abc, it is a valid string because frequencies are {a:1, b:1, c:1}. 
// So is s = abcc because we can remove one c and have 1 of each character in the remaining string. 
// If s = abccc however, the string is not valid as we can only remove 1 occurrence of c. 
// That would leave character frequencies of {a:1, b:1, c:2}.

function isValidString(s){
    let charMap = buildCharMap(s);

    let prevValue;
    let deletion = 0;
    for (let k in charMap) {
        if (!prevValue) prevValue = charMap[k];
        else{
            if(prevValue > 1 && charMap[k] === 1) {
                deletion = deletion + 1;
                if(deletion > 1) return 'NO';
                delete charMap[k];
            }
            else{
                let comparison = Math.abs(charMap[k] - prevValue);
                if(comparison >= 1){
                    deletion = deletion + comparison;
                    if(deletion > 1) return 'NO';
                    delete charMap[k];
                }
                else
                    prevValue = charMap[k];
            }
        }
    }
    return 'YES';

}
function buildCharMap(s) {
    let charMap = {};

    for (let char of s) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}