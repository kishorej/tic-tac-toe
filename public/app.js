(function(){
  const winningLines = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];

  let board = Array(9).fill(null);
  let current = 'X';
  let finished = false;

  const statusEl = document.getElementById('status');
  const boardEl = document.getElementById('board');
  const cells = Array.from(document.querySelectorAll('.cell'));
  const restartBtn = document.getElementById('restart');

  function render() {
    cells.forEach((cell, i) => {
      cell.textContent = board[i] || '';
      cell.classList.toggle('taken', !!board[i]);
      cell.classList.toggle('x', board[i] === 'X');
      cell.classList.toggle('o', board[i] === 'O');
    });
    const winner = checkWinner(board);
    if (winner) {
      statusEl.textContent = `Player ${winner} wins!`;
      finished = true;
      highlight(winner);
    } else if (isDraw(board)) {
      statusEl.textContent = `It's a draw.`;
      finished = true;
    } else {
      statusEl.textContent = `Player ${current}'s turn`;
    }
  }

  function makeMove(i) {
    if (finished) return;
    if (board[i]) return;
    board[i] = current;
    current = current === 'X' ? 'O' : 'X';
    render();
  }

  function checkWinner(b) {
    for (const [a,b1,c] of winningLines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    return null;
  }

  function isDraw(b) {
    return !checkWinner(b) && b.every(x => x !== null);
  }

  function highlight(player){
    winningLines.forEach(([a,b,c])=>{
      if (board[a]===player && board[b]===player && board[c]===player) {
        cells[a].style.background = '#fffbeb';
        cells[b].style.background = '#fffbeb';
        cells[c].style.background = '#fffbeb';
      }
    });
  }

  cells.forEach((cell, i) => {
    cell.addEventListener('click', () => makeMove(i));
  });

  restartBtn.addEventListener('click', () => {
    board = Array(9).fill(null);
    current = 'X';
    finished = false;
    cells.forEach(c=>c.style.background='');
    render();
  });

  render();
})();