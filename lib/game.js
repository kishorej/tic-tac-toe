// Pure game logic for Tic-Tac-Toe

function createBoard() {
  return Array(9).fill(null);
}

function makeMove(board, index, player) {
  if (index < 0 || index > 8) throw new Error('Index out of bounds');
  if (player !== 'X' && player !== 'O') throw new Error('Invalid player');
  if (board[index] !== null) throw new Error('Cell already taken');
  const newBoard = board.slice();
  newBoard[index] = player;
  return newBoard;
}

const winningLines = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function checkWinner(board) {
  for (const [a,b,c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isDraw(board) {
  return !checkWinner(board) && board.every(cell => cell !== null);
}

function availableMoves(board) {
  return board.map((v, i) => v === null ? i : -1).filter(i => i !== -1);
}

module.exports = {
  createBoard,
  makeMove,
  checkWinner,
  isDraw,
  availableMoves
};
