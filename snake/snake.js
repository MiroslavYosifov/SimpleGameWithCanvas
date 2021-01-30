export class Snake {
  constructor(x, y, width, height, snakeLength) {
      this.x = x;
      this.y = y;
      this.speed = 2;
      this.dX = 1;
      this.dY = 0;
      this.lastUpdatedDirection = 'X';
      this.width = width;
      this.height = height;
      this.tail = [{x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200}];
      this.snakeLength = snakeLength;
      this.color = 'red';
      this.canvas = document.getElementById('gameCanvas');
      this.canvasContext = this.canvas.getContext('2d');
  }

  drawSnake () {
    // this.tail.forEach((snakePart) => {
    //   this.canvasContext.fillStyle = 'lightblue';  
    //   this.canvasContext.strokestyle = this.color;
    //   this.canvasContext.fillRect(snakePart.x, snakePart.y, 10, 10);  
    //   this.canvasContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
    // });
    this.canvasContext.fillStyle = this.color;
    this.canvasContext.fillRect(this.x, this.y, this.width, this.height);
  };

  moveSnake() {
    if(this.dX === -1 &&  this.dY === 0) {
      this.x -= this.speed;
      this.drawSnake();
    }

    if(this.dX === 1 &&  this.dY === 0) {
      this.x += this.speed;
      this.drawSnake();
    }

    if(this.dX === 0 &&  this.dY === -1) {
      this.y -= this.speed;
      this.drawSnake();
    }

    if(this.dX === 0 &&  this.dY === 1) {
      this.y += this.speed;
      this.drawSnake();
    }

  }

  changeDirection(event) {
    if(event.key) {
      if (event.key === "ArrowLeft" && this.dX !== -1) {
        this.dX = -1;
        this.dY = 0;
        console.log("ArrowLeft");
      }
  
      if (event.key === "ArrowRight" && this.dX !== 1) {
        this.dX = 1;
        this.dY = 0;
        console.log("ArrowRight");
      }
  
      if (event.key === "ArrowUp" && this.dY !== -1) {
        this.dX = 0;
        this.dY = -1;
        console.log("ArrowUp");
      }
  
      if (event.key === "ArrowDown" && this.dY !== 1) {
        this.dX = 0;
        this.dY = 1;
        console.log("ArrowDown");
      }
    }
  }

  updateSnake(count) {
    this.y = 25+count;
  }

}

// function Snake() {
//   this.x = 0;
//   this.y = 0;
//   this.xSpeed = scale * 1;
//   this.ySpeed = 0;
//   this.total = 0;
//   this.tail = [];

//   this.draw = function() {
//     ctx.fillStyle = "#FFFFFF";
//     for (let i=0; i<this.tail.length; i++) {
//       ctx.fillRect(this.tail[i].x,
//         this.tail[i].y, scale, scale);
//     }

//     ctx.fillRect(this.x, this.y, scale, scale);
//   }

//   this.update = function() {
//     for (let i=0; i<this.tail.length - 1; i++) {
//       this.tail[i] = this.tail[i+1];
//     }

//     this.tail[this.total - 1] =
//       { x: this.x, y: this.y };

//     this.x += this.xSpeed;
//     this.y += this.ySpeed;

//     if (this.x > canvas.width) {
//       this.x = 0;
//     }

//     if (this.y > canvas.height) {
//       this.y = 0;
//     }

//     if (this.x < 0) {
//       this.x = canvas.width;
//     }

//     if (this.y < 0) {
//       this.y = canvas.height;
//     }
//   }

//   this.changeDirection = function(direction) {
//     switch(direction) {
//       case 'Up':
//         this.xSpeed = 0;
//         this.ySpeed = -scale * 1;
//         break;
//       case 'Down':
//         this.xSpeed = 0;
//         this.ySpeed = scale * 1;
//         break;
//       case 'Left':
//         this.xSpeed = -scale * 1;
//         this.ySpeed = 0;
//         break;
//       case 'Right':
//         this.xSpeed = scale * 1;
//         this.ySpeed = 0;
//         break;
//     }
//   }

//   this.eat = function(fruit) {
//     if (this.x === fruit.x &&
//       this.y === fruit.y) {
//       this.total++;
//       return true;
//     }

//     return false;
//   }

//   this.checkCollision = function() {
//     for (var i=0; i<this.tail.length; i++) {
//       if (this.x === this.tail[i].x &&
//         this.y === this.tail[i].y) {
//         this.total = 0;
//         this.tail = [];
//       }
//     }
//   }
// }


// for (const snakeProperties of snakeElements) {
//     if(snakeProperties.currentDirection === "ArrowUp" || snakeProperties.currentDirection === "ArrowDown") {
//         snakeProperties.snakeY += snakeProperties.snakeSpeedY;
//     }

//     if(snakeProperties.currentDirection === "ArrowLeft" || snakeProperties.currentDirection === "ArrowRight") {
//         snakeProperties.snakeX += snakeProperties.snakeSpeedX;
//     }
    
//     switch(direction) {
//         case "ArrowUp":
//             if(snakeProperties.currentDirection !== "ArrowUp" && snakeProperties.currentDirection !== "ArrowDown") {
//                 if(snakeProperties.snakeSpeedY > 0) {
//                     snakeProperties.snakeSpeedY = -snakeProperties.snakeSpeedY;
//                 }
//                 snakeProperties.currentDirection = "ArrowUp";
//             }
//           break;
//         case "ArrowRight":
//             if(snakeProperties.currentDirection !== "ArrowLeft" && snakeProperties.currentDirection !== "ArrowRight") {
//                 if(snakeProperties.snakeSpeedX < 0) {
//                     snakeProperties.snakeSpeedX = -snakeProperties.snakeSpeedX;
//                 }
//                 snakeProperties.currentDirection = "ArrowRight";
//             }
//           break;
//         case "ArrowDown":
//             if(snakeProperties.currentDirection !== "ArrowUp" && snakeProperties.currentDirection !== "ArrowDown") {
//                 if(snakeProperties.snakeSpeedY < 0) {
//                     snakeProperties.snakeSpeedY = -snakeProperties.snakeSpeedY;
//                 }
//                 snakeProperties.currentDirection = "ArrowDown";
//             }
//           break;
//         case "ArrowLeft":
//             if(snakeProperties.currentDirection !== "ArrowLeft" && snakeProperties.currentDirection !== "ArrowRight") {
//                 if(snakeProperties.snakeSpeedX > 0) {
//                     snakeProperties.snakeSpeedX = -snakeProperties.snakeSpeedX;
//                 }
//                 snakeProperties.currentDirection = "ArrowLeft";
//             }
//           break;
//         default:
//       }
// }