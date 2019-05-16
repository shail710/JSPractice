//Leetcode 349
//Given two arrays, write a function to compute their intersection.

// Each element in the result should appear as many times as it shows in both arrays
// The result can be in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

//javascript solutions: brute force, hashmap, set 
function intersect(nums1, nums2){
    let map = new Map();
    let result = [];
    for(let num of nums1){
        map.set(num , map.get(num) + 1 || 1);
    }
    
    for(let num of nums2){
        if(map.has(num) && map.get(num) > 0){
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    return result;
}


function intersect(nums1 , nums2){
    let arr1 = nums1.sort((a,b) => a-b);
    let arr2 = nums2.sort((a,b) => a-b);
    let result = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i] < arr2[j]) i++;
        else j++;
    }
    return result;
}


function intersect(nums1, nums2){
    let store = nums1.reduce((map, n) => {
        map[n] = (map[n] + 1) || 1;
        
        return map;
    }, {});
    
    return nums2.filter(n => {
        if (store[n]) {
            store[n]--;
            
            return true;
        } else {
            return false;
        }
    });
}