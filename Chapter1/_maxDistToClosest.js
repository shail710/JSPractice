// function maxDistToClosest(seats){
//     let maxLength = 0;
//     let count = 0;
//     let n = seats.length - 1;
       //finds the longest streak of empty seats and calculates the right seat
//     for(let seat of seats){
//         if(seat === 0) count++;
//         if(seat === 1) count = 0;
//         maxLength = Math.max((count + 1)/2, maxLength);
//     }

//     //checks if the longest streak of empty seats is from the star of the array
//     for(let i = 0; i <= n; i++){
//         if(seats[i] === 1){
//             maxLength = Math.max(maxLength , i);
//             break;
//         }
//     }


//     //checks if the longest streak of empty seats is from the end of the array
//     for(let j = n; j >= 0; j--){
//         if(seats[j] === 1){
//             maxLength = Math.max(maxLength, n - j)
//             break;
//         }
//     }

//     return (Math.round(maxLength) > maxLength) ? Math.round(maxLength) - 1 : Math.round(maxLength); 
// }


//faster solution

function maxDistToClosest(seats){
    let ans = 0;
    let prev = -1;
    let next = 0;
    let n = seats.length - 1
    for(let i = 0; i <= n; i++){
        if(seats[i] === 1) prev = i;
        else{
            while( next < i || next <= n && seats[next] === 0) 
                next++;
        }
        let left = (prev === -1) ? n : i - prev;
        let right = (prev === n) ? n : next - i;
        ans = Math.max(ans, Math.min(left, right));
    }
    return ans;
}