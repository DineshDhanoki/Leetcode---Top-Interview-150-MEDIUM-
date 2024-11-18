function setZeros(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let firstrowzero = false;
  let firstcolzero = false;

  for (let j = 0; j < col; j++) {
    if (matrix[0][j] === 0) {
      firstrowzero = true;
      break;
    }
  }
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      firstcolzero = true;
      break;
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][0] === 0 || matrix[j][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstrowzero) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0;
    }
  }
  if (firstcolzero) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }
}
