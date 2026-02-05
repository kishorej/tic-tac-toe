const { createBoard, makeMove, checkWinner, isDraw, availableMoves } = require('../lib/game');

describe('Tic-Tac-Toe game logic', () => {
  test('createBoard returns 9 nulls', () => {
    const b = createBoard();
    expect(b).toHaveLength(9);
    expect(b.every(x => x === null)).toBe(true);
  });

  test('makeMove places a player on board', () => {
    const b = createBoard();
    const b2 = makeMove(b, 0, 'X');
    expect(b2[0]).toBe('X');
    expect(b[0]).toBe(null); // original unchanged
  });

  test('makeMove throws for invalid index', () => {
    expect(() => makeMove(createBoard(), 9, 'X')).toThrow('Index out of bounds');
  });

  test('makeMove throws for taken cell', () => {
    const b = makeMove(createBoard(), 0, 'X');
    expect(() => makeMove(b, 0, 'O')).toThrow('Cell already taken');
  });

  test('checkWinner detects horizontal win', () => {
    let b = createBoard();
    b = makeMove(b, 0, 'X');
    b = makeMove(b, 1, 'X');
    b = makeMove(b, 2, 'X');
    expect(checkWinner(b)).toBe('X');
  });

  test('checkWinner detects diagonal win', () => {
    let b = createBoard();
    b = makeMove(b, 0, 'O');
    b = makeMove(b, 4, 'O');
    b = makeMove(b, 8, 'O');
    expect(checkWinner(b)).toBe('O');
  });

  test('isDraw detects draw', () => {
    // X O X
    // X O O
    // O X X
    const b = ['X','O','X','X','O','O','O','X','X'];
    expect(checkWinner(b)).toBe(null);
    expect(isDraw(b)).toBe(true);
  });

  test('availableMoves returns remaining indices', () => {
    const b = [null,'X',null,null,'O',null,null,null,'X'];
    expect(availableMoves(b)).toEqual([0,2,3,5,6,7]);
  });
});
