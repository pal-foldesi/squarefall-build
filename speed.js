export default class Speed {
  constructor() {
    this.value = 0;
    this.delay = 1000;
  }

  increase() {
    this.value += 1;
    this.delay = 1000 - 100 * this.value;
  }

  increaseIfNecessary(desiredSpeed) {
    if (desiredSpeed > this.value) {
      this.increase();
    }
    return this.value;
  }
}
