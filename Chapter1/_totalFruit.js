//Leetcode 904
// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: 
// you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1]

// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2]

/*******************************************************************************************************************************************/

// function totalFruit(tree){
//     let fruitMap = new Map();
//     let i = 0;
//     let j;

//     for(j = 0; j < tree.length; j++){
//         fruitMap.set(tree[j], fruitMap.get(tree[j]) + 1 || 1);
//         if(fruitMap.size > 2){
//             fruitMap.set(tree[i], fruitMap.get(tree[i]) - 1);
//             if(fruitMap.get(tree[i]) === 0) fruitMap.delete(tree[i]);
//             i++;
//         }
//     }
//     return j - i;
// }


function totalFruit(tree){
    let result = 0;
    let currentTotal = 0;
    let countLastFruit = 0;
    let firstFruit = 0;
    let lastFruit = 0;

    for(let fruit of tree){
        currentTotal = (fruit === firstFruit || fruit === lastFruit) ? currentTotal + 1 : countLastFruit + 1;
        countLastFruit = (fruit === lastFruit) ? countLastFruit + 1 : 1;
        if(lastFruit !== fruit) {
            firstFruit = lastFruit;
            lastFruit = fruit;
        }
        result = Math.max(result , currentTotal);
    }
    return result;
}