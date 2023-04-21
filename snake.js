// Define the canvas element
const canvas = document.getElementById('snake-game');

// Set the canvas context to 2D
const ctx = canvas.getContext('2d');

// Define the size of each square in the game
const squareSize = 10;

// Define the initial position of the snake
let snake = [
  { x: 50, y: 50 },
  { x: 40, y: 50 },
  { x: 30, y: 50 },
  { x: 20, y: 50 },
  { x: 10, y: 50 }
];

// Define the initial direction of the snake
let direction = 'right';

// Define the food object
let food = {
  x: Math.floor(Math.random() * canvas.width / squareSize) * squareSize,
  y: Math.floor(Math.random() * canvas.height / squareSize) * squareSize
};

// Define the function to draw the snake
function drawSnake() {
  snake.forEach(segment => {
    ctx.fillStyle = 'green';
    ctx.fillRect(segment.x, segment.y, squareSize, squareSize);
  });
}

// Define the function to move the snake
function moveSnake() {
  // Remove the last segment of the snake
  snake.pop();

  // Determine the position of the new head segment
  let newHead = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case 'up':
      newHead.y -= squareSize;
      break;
    case 'down':
      newHead.y += squareSize;
      break;
    case 'left':
      newHead.x -= squareSize;
      break;
    case 'right':
      newHead.x += squareSize;
      break;
  }

  // Add the new head segment to the beginning of the snake
  snake.unshift(newHead);
}

// Define the function to draw the food
function drawFood() {
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, squareSize, squareSize);
}

// Define the function to check for collisions
function checkCollisions() {
  // Check for collision with the walls
  if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
    return true;
  }

  // Check for collision with the snake's body
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      return true;
    }
  }

  return false;
}

// Define the function to check for food consumption
function checkFood() {
  if (snake[0].x === food.x && snake[0].y === food.y) {
    // Add a new segment to the snake
    snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });

    // Generate a new food object
    food = {
      x: Math.floor(Math.random() * canvas.width / squareSize) * squareSize,
      y: Math.floor(Math.random() * canvas.height / squareSize) * squareSize
    };
  }
}

// Define the main game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move the snake
  moveSnake();

  // Check for collisions
  if (checkCollisions()) {
    clearInterval(gameInterval);
    alert('Game over!');
    return;
  }

  // Check for food consumption
  checkFood();

  // Draw the snake and food
  drawSnake();
  drawFood();
}

// Start the game loop
const gameInterval = setInterval(gameLoop, 100);
