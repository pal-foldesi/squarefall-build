import {
  SQUARE_SIDE_LENGTH,
} from './constants.js';

export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveDown() {
    this.y += SQUARE_SIDE_LENGTH;
  }

  moveLeft() {
    this.x += -SQUARE_SIDE_LENGTH;
  }

  moveRight() {
    this.x += SQUARE_SIDE_LENGTH;
  }

  transformClockwise(oldX, oldY) {
    this.translate(-oldX, -oldY);
    this.rotateClockwise();
    this.translate(oldX, oldY);
  }

  transformCounterClockwise(oldX, oldY) {
    this.translate(-oldX, -oldY);
    this.rotateCounterClockwise();
    this.translate(oldX, oldY);
  }

  translate(offsetX, offsetY) {
    this.x = this.x + offsetX;
    this.y = this.y + offsetY;
  }

  rotateClockwise() {
    const oldX = this.x;
    const oldY = this.y;

    /*
    We are performing a clockwise 90 degree rotation in a 2D coordinate system.
    https://en.wikipedia.org/wiki/Rotation_matrix

    90 degrees = Math.PI / 2 radians
    Math.sin(Math.PI / 2) = 1
    Math.cos(Math.PI / 2) = 0

    newX = oldX * 0 - oldY * 1 = -oldY
    newY = oldX * 1 + oldY * 0 = oldX
    */

    this.x = - oldY;
    this.y = oldX;
  }

  rotateCounterClockwise() {
    const oldX = this.x;
    const oldY = this.y;

    /*
    We are performing a counter-clockwise 90 degree rotation in a 2D coordinate system.
    https://en.wikipedia.org/wiki/Rotation_matrix

    -90 degrees = 3 * Math.PI / 2 radians
    Math.sin(3 * Math.PI / 2) = -1
    Math.cos(3 * Math.PI / 2) = 0

    newX = oldX * 0 - oldY * -1 = oldY
    newY = oldX * -1 + oldY * 0 = -oldX
    */

    this.x = oldY;
    this.y = -oldX;
  }

  equals(otherPoint) {
    return otherPoint !== undefined &&
      otherPoint instanceof Point &&
      this.x === otherPoint.x &&
      this.y === otherPoint.y;
  }
}
