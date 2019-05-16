//brute force solution
//since we have to visit each char of the str once, for all the solutions time complexity: O(N)

// function URLify(str){
//     let string  = '';

//     for(let char of str){
//         if(char === ' ')
//             string += '%20';
//         else string += char;
//     }

//     return string;
// }

//Using split and join mehtods

// function URLify(str){
//     return (str) ? str.split(' ').join('%20') : false;
// }


//Using RegEx
function URLify(str){
    return (str) ? str.replace(/\s/g, '%20') : str;
}