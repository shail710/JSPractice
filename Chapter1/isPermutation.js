//Time Complexity: O(N logN) log N for sorting and N for comparision
//Space Complexity is O(1)
function isPermutation(str1, str2){
    const sort = str => [...str].sort().join('');

    if(!str1 || !str2 || str1.length !== str2.length) return false;

    return sort(str1) === sort(str2);
}

//Using Map
//Time and space Complexity: O(N)

function isPermutation(str1, str2){
    let charMap = new Map();

    for(let char of str1){
        charMap.set(char , charMap.get(char) + 1 || 1); //(each character of a string will be the key and count of that character will be the value)
    }

    for(let char of str2){
        if(!charMap.has(char)) return false; //if a char from str2 is not found in str1 will return false
        if(charMap.get(char) === 1) charMap.delete(char); //if the char is present in map and the count is 1 than will delete that char
        else charMap.set(char , charMap.get(char) - 1); //if the char is present and count > 1; will decrease the count of that char
    }
    return (!charMap.size); //returns true if the map size is 0
}