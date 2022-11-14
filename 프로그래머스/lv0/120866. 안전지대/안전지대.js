function solution(board) {
  const total = board.length;

  for (let row = 0; row < total; row++) {
    for (let col = 0; col < total; col++) {
      const prevRow = row - 1 < 0 ? 0 : row - 1;
      const nextRow = row + 1 > total ? total : row + 1;
      const prevCol = col - 1 < 0 ? 0 : col - 1;
      const nextCol = col + 1 > total ? total : col + 1;

      const currentVal = board[row][col];

      if (currentVal === 1) {
        board[prevRow][prevCol] === 0 && (board[prevRow][prevCol] = 'X');
        board[prevRow][col] === 0 && (board[prevRow][col] = 'X');
        board[prevRow][nextCol] === 0 && (board[prevRow][nextCol] = 'X');

        board[row][prevCol] === 0 && (board[row][prevCol] = 'X');
        board[row][col] = 'X';
        board[row][nextCol] === 0 && (board[row][nextCol] = 'X');

        if (row !== total - 1) {
          board[nextRow][prevCol] === 0 && (board[nextRow][prevCol] = 'X');
          board[nextRow][col] === 0 && (board[nextRow][col] = 'X');
          board[nextRow][nextCol] === 0 && (board[nextRow][nextCol] = 'X');
        }
      }
    }
  }

  return board.flatMap((item) => item).filter((item) => item !== 'X').length;
}