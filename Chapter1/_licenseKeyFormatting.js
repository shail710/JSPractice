//Leetcode 482
// You are given a license key represented as a string S which consists only alphanumeric character and dashes. 
// The string is separated into N+1 groups by N dashes.

// Given a number K, we would want to reformat the strings such that each group contains exactly K characters, 
// except for the first group which could be shorter than K, but still must contain at least one character. 
// Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

// Given a non-empty string S and a number K, format the string according to the rules described above.

// Input: S = "5F3Z-2e-9-w", K = 4
// Output: "5F3Z-2E9W"

// Input: S = "2-5g-3-J", K = 2
// Output: "2-5G-3J"

// function licenseKeyFormatting(S , K){
//     let formattedString = '';

//     for(let i = S.length - 1; i >= 0; i--){
//         if(s.charAt(i) !== '-'){
//             if(formattedString.length % (K + 1) === K) formattedString += '-';
//             formattedString += S.charAt(i);
//         }
//     }

//     return formattedString.toUpperCase().split``.reverse().join``;
// }

function licenseKeyFormatting(S , k){
    let formattedString = '';
    for(let i = S.length - 1; i >= 0; i--){
        if(S[i] !== '-'){
            if(formattedString.length % (k + 1) === k) 
                formattedString = S[i] + '-' + formattedString;
            else formattedString = S[i] + formattedString;
        }
    }
    return formattedString.toUpperCase();
}

// function licenseKeyFormatting(S, K){
//     let formattedString = '';
//     let count = 0;

//     for(let i = S.length - 1; i >=0; i--){
//         if(s[i] === '-')
//             continue;
//         count++;

//         if(count === K + 1){
//             formattedString = s[i] + '-' + formattedString;
//             count = 1;
//             continue;
//         }
//         formattedString = s[i] + formattedString;
//     }

//     return formattedString.toUpperCase();
// }