// function stringCompression(str){
//     if(!str || str.length <= 2) return str;
//     let compressedString = '';
//     let currentChar = str[0];
//     let charMap = new Map();
//     for(let char of str){
//         if(char === currentChar){
//             charMap.set(char , charMap.get(char) + 1 || 1);
//         }
//         else{
//             compressedString += currentChar + charMap.get(currentChar);
//             charMap.clear();
//             currentChar = char;
//             charMap.set(char , 1);
//         }
//     }

//     compressedString += [...charMap][0].join('');
//     return (compressedString.length < str.length) ? compressedString : str;
// }


function stringCompression(str){
    if (!str || str.length <= 2) return str;

    const compressed = str.match(/(.)\1*/g)
                    .map(group => group[0] + group.length)
                    .join('');

    return compressed.length < str.length ? compressed : str;
}