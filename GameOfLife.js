function gameOfLife(board) {
  const rows = board.length;
  const cols = board[0].length;

  /*     States:
    0: dead to dead
    1: live to live
    2: live to dead
    3: dead to live  */

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let liveNeighbours = 0;

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          (board[newRow][newCol] === 1 || board[newRow][newCol] === 2)
        ) {
          liveNeighbours++;
        }
      }
      if (board[row][col] === 1) {
        if (liveNeighbours < 2 || liveNeighbours > 3) {
          board[row][col] = 2;
        }
      } else {
        if (liveNeighbours === 3) {
          board[row][col] = 3;
        }
      }
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === 2) {
        board[row][col] = 0;
      } else if (board[row][col] === 3) {
        board[row][col] = 1;
      }
    }
  }
}

const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
gameOfLife(board);
console.log(board);
