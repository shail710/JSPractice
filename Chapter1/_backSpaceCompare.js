//Leetcode 844
//Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
function backSpaceCompare(S, T){
    return (reducedString(S) === reducedString(T));
}

function reducedString(str){
    let stack = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] !== '#') stack.push(str[i]);
        else stack.pop();
    }
    return stack.join``;
}

function backSpaceCompare(S, T){
    let s = [];
    let t = [];

    for(let i = 0; i < S.length; i++){
        if(S[i] !== '#') s.push(S[i]);
        else {
            if(s.length > 0)
                s.pop();
            }
    }

    for(let i = 0; i < T.length; i++){
        if(T[i] !== '#') t.push(T[i]);
        else {
            if(t.length > 0)
                t.pop();
            }
    }

    return s.join`` === t.join``;
}

function backSpaceCompare(S, T){
    return reducedString(S) === reducedString(T);
}

const reducedString = (str) => {
    let stack = [];
    str.split``.forEach(element => {
        element !== '#' ? stack.push(element) : stack.pop();
    });
    return stack.join``;
}


function backSpaceCompare(S, T){
    return reducedString(S) === reducedString(T);
}

function reducedString(string) {
    let reg = /([a-z])#/g;
    while(reg.test(string)) {
        //replaces the char before '#' with ''
        string = string.replace(reg, '')
    }
    //replaces the '#' with ''
    return string.replace(/#/g, '')
}