function longestCommonPrefix(strs){
    if (strs.length === 0) return '';

    // First scan: find shortest length
    let minLength = strs[0].length;
    for (const str of strs) {
      if (str.length < minLength) {
        minLength = str.length;
      }
    }

    //minlength using array.map()
    //spread operator 
    const minLength = Math.min(...strs.map( str => str.length));
  
    // Second scan: find common chars until a different one
    for (let i = 0; i < minLength; i++) {
      for (const str of strs) {
        if (str[i] !== strs[0][i]) {
          return str.substr(0, i);
        }
      }
    }
    return strs[0].substr(0, minLength);
}

//array.reduce()

function longestCommonPrefix(strs){
    if(strs.length === 0) return '';

    return strs.reduce((prev, next) => {
        let i = 0;
        while(prev[i] && next[i] && prev[i] === next[i]) 
            i++;
        return prev.slice(0 , i);
    });
}