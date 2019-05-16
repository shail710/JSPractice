//Leetcode 54

function spiralOrder(matrix){
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return [];
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startColumn = 0;
    let endColumn = matrix[0].length - 1;
    let spiralMatrix = [];
    let totalLength = matrix.length * matrix[0].length;
    

    while(startRow <= endRow && startColumn <= endColumn){
        //takes elements from the 1st row of the matrix
        for(let i = startColumn; i <= endColumn; i++){
            if(spiralMatrix.length !== totalLength)
                spiralMatrix.push(matrix[startRow][i]);
        }
        startRow++;

        //takes elements from the last column of the matrix
        for(let i = startRow; i <= endRow; i++){
            if(spiralMatrix.length !== totalLength)
                spiralMatrix.push(matrix[i][endColumn]);
        }
        endColumn--;

        //takes elements from last row of the matrix
        for(let i = endColumn; i >= startColumn ; i--){
            if(spiralMatrix.length !== totalLength)
                spiralMatrix.push(matrix[endRow][i]);
        }
        endRow--;

        //takes care of the first column of the elements
        for(let i = endRow; i >= startRow; i--){
            if(spiralMatrix.length !== totalLength)
                spiralMatrix.push(matrix[i][startColumn]);
        }
        startColumn++;
    }

    return spiralMatrix;

}