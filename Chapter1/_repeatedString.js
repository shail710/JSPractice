function repeatedString(s, n){
    if(s.length === 1){
        if(s === 'a') return n;
        return 0;
    }

    if(s.match(/a/g)){
        let aInStr = s.match((/a/g)).length;
        let count = Math.floor(n / s.length);

        return (count * aInStr) + ((s.substring(0,n % s.length)).match(/a/g)).length;
    }
    else return 0;
}