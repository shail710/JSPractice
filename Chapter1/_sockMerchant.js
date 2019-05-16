//Time Complexity O(N logN)

// function sockMerchant(ar){
//     let count = 0;
//     ar.sort();
//     for(let i = 0; i < ar.length; i++)
//         if(ar[i] === ar[i + 1]){
//         count++;
//         i++;
//     }  
//     return count;
// }


//Time and Space Complexity O(N)
function sockMerchant(ar){
    let count = 0;
    let sockMap = new Set();
    for(let sock of ar){
        if(!sockMap.has(sock)) sockMap.add(sock);
        else{
            count++;
            sockMap.delete(sock);
        }
    }
    return count;
}
