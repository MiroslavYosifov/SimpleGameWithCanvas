export class Snake {
  constructor(x, y, gridSize) {
      this.gridSize = gridSize;
      this.x = x;
      this.y = y
      this.moveSnakeElement = gridSize;
      this.dX = 1;
      this.dY = 0;
      this.width = gridSize;
      this.height = gridSize;
      this.currentDirection = "ArrowRight";
      this.eventKey = "";
      this.tail = [{ x: gridSize * 4, y: 0 }, { x: gridSize * 3 , y: 0 }, { x: gridSize * 2, y: 0 }, { x: gridSize, y: 0 }];
      this.color = 'red';
      this.canvas = document.getElementById('gameCanvas');
      this.canvasContext = this.canvas.getContext('2d');
  };

  drawSnake () {
    this.changeDirection();
    for (let index = 0; index <  this.tail.length; index++) {
      this.canvasContext.fillStyle = index % 2 === 0 ? 'purple' : 'green';  
      this.canvasContext.fillRect(this.tail[index].x, this.tail[index].y, this.width, this.height);  
      this.canvasContext.strokeRect(this.tail[index].x, this.tail[index].y, this.width, this.height);
    }
  };

  updatedSnake() {
    this.tail.push(this.tail[this.tail.length-1]);
  };

  moveSnake() {
    if(this.dX === -1 &&  this.dY === 0) {
      this.moveThroughWall();
      this.x -= this.moveSnakeElement;
    };
    if(this.dX === 1 &&  this.dY === 0) {
      this.moveThroughWall();
      this.x += this.moveSnakeElement;
    };
    if(this.dX === 0 &&  this.dY === -1) {
      this.moveThroughWall();
      this.y -= this.moveSnakeElement;
    };
    if(this.dX === 0 &&  this.dY === 1) {
      this.moveThroughWall();
      this.y += this.moveSnakeElement;
    };
    const newElement = { x: this.x, y: this.y };
    this.tail.pop();
    this.tail.unshift(newElement);
  };

  moveThroughWall() {
    if(this.x <= 0 && this.currentDirection === "ArrowLeft") {
      this.x = this.canvas.width;
    }
    if(this.x >= this.canvas.width-this.gridSize && this.currentDirection === "ArrowRight") {
      this.x = -this.gridSize;
    }
    if(this.y <= 0 && this.currentDirection === "ArrowUp") {
      this.y = this.canvas.height;
    }
    if(this.y >= this.canvas.height-this.gridSize && this.currentDirection === "ArrowDown") {
      this.y = -this.gridSize;
    }
  };

  isDeath() {
    for (let index = 2; index < this.tail.length; index++) {
      if(this.x === this.tail[index].x && this.y === this.tail[index].y) {
        console.log(this.tail[index]);
        console.log(this.x, this.y);
        return true;
      }
    }
    return false
  }

  getDirection(event) {
    this.eventKey = event.key;
  }

  changeDirection(event) {
    if(this.eventKey) {
      if (this.eventKey === "ArrowLeft" && this.currentDirection !== "ArrowRight" && this.dX !== -1) {
        this.dX = -1;
        this.dY = 0;
        this.currentDirection = this.eventKey;
        console.log("ArrowLeft");
      }
  
      if (this.eventKey === "ArrowRight" && this.currentDirection !== "ArrowLeft" && this.dX !== 1) {
        this.dX = 1;
        this.dY = 0;
        this.currentDirection = this.eventKey;
        console.log("ArrowRight");
      }
  
      if (this.eventKey === "ArrowUp" && this.currentDirection !== "ArrowDown" && this.dY !== -1) {
        this.dX = 0;
        this.dY = -1;
        this.currentDirection = this.eventKey;
        console.log("ArrowUp");
      }
  
      if (this.eventKey === "ArrowDown" && this.currentDirection !== "ArrowUp" && this.dY !== 1) {
        this.dX = 0;
        this.dY = 1;
        this.currentDirection = this.eventKey;
        console.log("ArrowDown");
      }
    }
  };
}