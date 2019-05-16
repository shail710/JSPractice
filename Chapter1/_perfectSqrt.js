// var isPerfectSquare = function(num) {
//     return (Number.isInteger(Math.sqrt(num))) ? true : false;
// };


var isPerfectSquare = function(num) {
    let max = num;
    let min = 1;
    let root = (num + min) / 2;
    if (root % 1 !== 0) {
      root = Number(String(root).split(".")[0]);
    }
    while (max - min > 1) {
      const squre = root * root;
      if (squre === num) {
        break;
      }
      if (squre > num) {
        const lower = (root + min) / 2;
        max = root;
        root = lower % 1 === 0 ? lower : Number(String(lower).split(".")[0]);
      } else {
        const higher = (root + max) / 2;
        min = root;
        root = higher % 1 === 0 ? higher : Number(String(higher).split(".")[0]);
        }   
    }
    return root * root === num;
};