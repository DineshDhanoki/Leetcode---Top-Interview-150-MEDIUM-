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
}
