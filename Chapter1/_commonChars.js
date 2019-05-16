//Leetcode 1002
// Given an array A of strings made only from lowercase letters, 
// return a list of all characters that show up in all strings within the list (including duplicates).  
// For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

//You may return the answer in any order.

// function commonChars(A){
//     let ans = A[0].split``;

//     for(let i = i; i < A.length; i++){
//         ans = findCommonChars(ans, A[i].split``);
//     }
//     return ans;
// }

// function findCommonChars(ans , str){
//     return ans.filter(char => {
//         let i = str.indexOf(char);
//         if( i !== -1){
//             str.splice(i,1);
//             return true;
//         }
//         return false;
//     });
// }


function commonChars(A){
    return ans = A[0].split``.filter(char => {
        let i = 1;
        let index = -1;

        while(i < A.length){
            //find the index of a given char in the new string
            index = A[i].indexOf(char);
            if(index > -1){
                //filters out the char that is a match and concate the rest of the string
                A[i] = A[i].slice(0, index) + A[i].slice(index + 1 , A[i].length);
                i++;
            }
            else break;
        }
        if( i === A.length) return char;
    });
}