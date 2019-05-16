//Leetcode 49

function groupAnagrams(strs){
    let result = [];
    let map = new Map();

    for(let i of strs){
        if(!map.has(str.sort()))
            map.set(str.sort(), [str]);
        else map.set(str.sort(), map.get(str.sort()).concat([str]));
    }
    return result;
}