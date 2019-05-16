//Leetcode 349
//Given two arrays, write a function to compute their intersection.

// Each element in the result must be unique.
// The result can be in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

//javascript solutions: brute force, hashmap, set 

function intersect(nums1, nums2){
    let result = [];
    let setNum1 = new Set(nums1);
    let setNum2 = new Set(nums2);

    let [smallSet , largeSet] = (setNum1.length < setNum2.length) ? [setNum1 , setNum2] : [setNum2 , setNum1];

    smallSet.forEach( num => {
        largeSet.has(num) && result.push(num);
    });

    return result;
}

function intersect(nums1 , nums2){
    let setNum1 = new Set(nums1);

    return [...new Set(nums2.filter(num => setNum1.has(num)))];
}
// function intersect(nums1, nums2){
//     let map = new Map();
//     for(let num of nums1){
//         if(!map.has(num))
//             map.set(num, 1);
//     }
    
//     return nums2.filter(n => {
//         if(map.has(n)){
//             map.delete(n);
//             return true;
//         }
//         else return false;
//     });
// }

// function intersect(nums1, nums2){
//     let sortedNums1 = nums1.sort((a , b) => a - b);
//     let sortedNums2 = nums2.sort((a , b) => a - b);
//     let result = [];
//     let i = 0;
//     let j = 0;
    
//     while(i < sortedNums1.length && j < sortedNums2.length){
//         if(sortedNums1[i] === sortedNums2[j]){
//             if(!result.includes(sortedNums1[i])) result.push(sortedNums1[i]);
//             i++;
//             j++;
//         }
//         else if(sortedNums1[i] < sortedNums2[j]) i++;
//         else j++;
//     }
//     return result;
// }