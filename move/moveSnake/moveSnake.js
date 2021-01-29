export const moveSnake = (snakeProperties, direction) => {
    switch(direction) {
        case "ArrowUp":
            snakeProperties.snakeY += -10;
          break;
        case "ArrowRight":
            snakeProperties.snakeX += -(-10);
          break;
        case "ArrowDown":
            snakeProperties.snakeY += -(-10);
          break;
        case "ArrowLeft":
            snakeProperties.snakeX += -(10);
          break;
        default:
          // code block
      }

      
}