//Algorithm that determins if the string has all unique characters

//brute forecd solution without the help of additional data structure
//time complexity: O(N^2)
//Space Complexity: O(1)
function isUnique(str){
    for(let i = 0; i < str.length; i++){
        for(let j = 1; j <= str.length; j++){
            if(str[i] === str[j])
                return false; 
        }
    }
    return true;
}

//with the help of additional data stucture
//time and space complexity: O(N)

function isUnique(str){
    let char = new Set();

    for(let i = 0; i < str.length; i++){
        if(char.has(str[i])) return false;
        char.add(str[i]);
    }
    return true;
}


//without the help ofadditional data structure
//Time Complexity: O(N logN) logN for sorting and N for the comparision
//Space Complexity: O(1)
function isUnique(str){
    //inbuilt sorting uses quicksort
    const str = str.sort();

    for(let i = 1; i < str.length; i++){
        if(str[i] === str[i - 1]) return false;
    }

    return true;
}