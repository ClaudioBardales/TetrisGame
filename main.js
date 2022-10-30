const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let board = new Board();

// Calculate Size of Canvas from constants

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const play = () => {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece = piece;
};

document.addEventListener('keydown', (event) => {
  if (moves[event.keyCode]) {
    // Stop the event from bubbling.
    event.preventDefault();

    // Get a new state of piece
    let p = moves[event.keyCode](board.piece);

    if (board.valid(p)) {
      // If the move is valid, move the piece.
      board.piece.move(p);

      // Clear old position before drawing
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      board.piece.draw();
    }
    if (event.keyCode === KEY.SPACE) {
      // Hard Drop
      while (board.valid(p)) {
        board.piece.move(p);
        p = moves[KEY.DOWN](board.piece);
      }
    }
  }
});
