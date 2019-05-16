function rotateMatrix(matrix) {
    if (!matrix || !matrix.length) throw Error('invalid matrix');
  
    const len = matrix.length;
    for (let layer = 0; layer < len / 2; layer++) {
      const firstLayer = layer,
            lastLayer = len - 1 - layer;
  
      for (let i = layer; i < lastLayer; i++) {
        const offset = i - layer,
              top = matrix[firstLayer][i];
  
        // left -> top
        matrix[firstLayer][i] = matrix[lastLayer - offset][firstLayer];
        // bottom -> left
        matrix[lastLayer - offset][firstLayer] = matrix[lastLayer][lastLayer - offset];
        // right -> bottom
        matrix[lastLayer][lastLayer - offset] = matrix[i][lastLayer];
        // top -> right
        matrix[i][lastLayer] = top;
      }
    }
    return matrix;
  }