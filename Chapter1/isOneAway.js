//O(N)
// function isOneAway(str1, str2){
//     let count = 0;
//     for(const char of str1){
//         if(!str2.includes(char)) count++;
//     }
//     return count === 1;
// }



//book solution--------O(n)
function isOneAway(str1,str2){
    if(Math.abs(str1.length - str2.length) > 1) return false;
    
    let isEdited = false;

    for(let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++){
        if(str1[i] !== str2[j]){
            if(isEdited) return false;
            if(str1.length > str2.length) j--;
            if(str1.length < str2.length) i--;
            isEdited = true;
        }
    }
    return true;    
}