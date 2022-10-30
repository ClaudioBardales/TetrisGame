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
  console.table(board.grid);
};
