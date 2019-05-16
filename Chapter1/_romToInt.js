var romanToInt = function(s) {
    let roman = {'I' : 1 , 
                 'V' : 5,
                 'X' : 10,
                 'L' : 50,
                 'C' : 100,
                 'D' : 500,
                 'M' : 1000};
    let num = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')){
            num = num + roman[s[i + 1]] - 1;
            i++;
        }
        else if(s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')){
            num = num + roman[s[i + 1]] - 10;
            i++;
        }
        else if(s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')){
            num = num + roman[s[i + 1]] - 100;
            i++;
        }
        else num = num + roman[s[i]];
    }
    return num;
};


var romanToInt = function(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

   let result = 0;
   let prev = roman[s[0]];
   
   for (let letter of s) {
       result += roman[letter];
       
       if (roman[letter] > roman[prev]) {
           result -= roman[prev] * 2;
       }
       
       prev = letter;
   }
   
   return result;
   
}
