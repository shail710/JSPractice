//Hackerank
//You are given a string containing characters  and  only. 
//Your task is to change it into a string such that there are no matching adjacent characters. 
//To do this, you are allowed to delete zero or more characters in the string.

//Your task is to find the minimum number of required deletions.

//For example, given the string , remove an  at positions  and  to make  in  deletions.
function alterNatingCharacter(s){
    let count = 0;
    const compressed = s.match(/(.)\1*/g)
                    .map(group => group.length);

    for(let i = 0; i < compressed.length; i++){
        if(compressed[i] > 1)
            count += (compressed[i] - 1);
    }
    return count;
}

//alterNatingCharacter('AAABBBAABB'); -> 6