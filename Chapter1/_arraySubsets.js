//Leetcode 78

function subsets(nums){
    let results = [];
    dfs([] , 0);

    function dfs(current, index){
        results.push(current);

        for(let i = 0; i < nums.length; i++){
            dfs(current.concat(nums[i]), i + 1);
        }
    }
    return results;
}
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]