export class Snake {
  constructor(x, y, scale) {
      this.x = x;
      this.y = y;
      this.moveSnakeElement = scale;
      this.dX = 1;
      this.dY = 0;
      this.width = scale;
      this.height = scale;
      this.tail = [{x: 0, y: 0},  {x: 10, y: 0},  {x: 20, y: 0},  {x: 30, y: 0},  {x: 40, y: 0}];
      this.color = 'red';
      this.canvas = document.getElementById('gameCanvas');
      this.canvasContext = this.canvas.getContext('2d');
  }

  drawSnake () {
    for (let index = 0; index <  this.tail.length; index++) {
      this.canvasContext.fillStyle = 'lightblue';  
      this.canvasContext.strokestyle = this.color;
      this.canvasContext.fillRect(this.tail[index].x, this.tail[index].y, this.width, this.height);  
      this.canvasContext.strokeRect(this.tail[index].x, this.tail[index].y, this.width, this.height);
    }
  };

  updatedSnake() {
    this.tail.push(this.tail[this.tail.length-1]);
  }

  moveSnake() {
    if(this.dX === -1 &&  this.dY === 0) this.x -= this.moveSnakeElement;
    if(this.dX === 1 &&  this.dY === 0) this.x += this.moveSnakeElement;
    if(this.dX === 0 &&  this.dY === -1) this.y -= this.moveSnakeElement;
    if(this.dX === 0 &&  this.dY === 1) this.y += this.moveSnakeElement;

    const newElement = { x: this.x, y: this.y };
    this.tail.pop();
    this.tail.unshift(newElement);

    if(this.tail.length < 10) {
      this.updatedSnake();
    }
    
    this.drawSnake();
    
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
}