import { CONTEXT, SQUARE_SIDE_LENGTH } from './constants.js';
export default class Square {
  constructor(point, fillStyle) {
    // The point of a Square always refers to its top left point
    this.point = point;
    this.fillStyle = fillStyle;
    this.sideLength = SQUARE_SIDE_LENGTH;
  }

  draw() {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = this.fillStyle;
    CONTEXT.fillRect(this.point.x, this.point.y, this.sideLength, this.sideLength);
  }

  drawPoint() {
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = 'red';
    CONTEXT.arc(this.point.x, this.point.y, 10, 0, 2 * Math.PI);
    CONTEXT.stroke();
  }

  drawCoordinates() {
    CONTEXT.fillStyle = 'black';
    CONTEXT.fillText(`${this.point.x} | ${this.point.y}`, this.point.x, this.point.y);
  }

  drawEdgePoints() {
    Square.drawEdgePoint('yellow', this.point.x, this.point.y);
    Square.drawEdgePoint('blue', this.point.x + SQUARE_SIDE_LENGTH, this.point.y);
    Square.drawEdgePoint('magenta', this.point.x + SQUARE_SIDE_LENGTH, this.point.y + SQUARE_SIDE_LENGTH);
    Square.drawEdgePoint('black', this.point.x, this.point.y + SQUARE_SIDE_LENGTH);
  }

  static drawEdgePoint(color, x, y) {
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = color;
    CONTEXT.arc(x, y, 10, 0, 2 * Math.PI);
    CONTEXT.stroke();
  }

  clear() {
    CONTEXT.clearRect(this.point.x, this.point.y, this.sideLength, this.sideLength);
  }

  equals(otherSquare) {
    return otherSquare !== undefined && otherSquare instanceof Square && this.sideLength === otherSquare.sideLength && this.point.equals(otherSquare.point);
  }

  moveDown() {
    this.clear();
    this.point.moveDown();
    this.draw();
  }

  clearAndMoveDown() {
    this.clear();
    this.point.moveDown();
  }

  moveLeft() {
    this.clear();
    this.point.moveLeft();
    this.draw();
  }

  moveRight() {
    this.clear();
    this.point.moveRight();
    this.draw();
  }

  transformClockwise(x, y) {
    this.point.transformClockwise(x, y);
  }

  transformCounterClockwise(x, y) {
    this.point.transformCounterClockwise(x, y);
  }

  isBelowLimit(yLimit) {
    return this.point.y < yLimit;
  }

}