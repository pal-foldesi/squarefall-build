export default class Score {
  constructor() {
    this.high = Score.getHighScore();
    document.getElementById('high-score').innerText = this.high;
    this.current = 0;
  }

  static getHighScore() {
    let highScore = localStorage.getItem('tetris-high');
    if (highScore === undefined) {
      highScore = 0;
    }
    return highScore;
  }

  static calculateIncrease (rowsCleared) {
    const score = (2 ** rowsCleared) + 2
    return score
  }

  increment(value) {
    this.current += value;
    document.getElementById('current-score').innerText = this.current;
  }

  get() {
    return this.current;
  }

  set(newValue) {
    this.current = newValue;
  }

  submit() {
    if (this.current > this.high) {
      localStorage.setItem('tetris-high', this.current);
      document.getElementById('high-score').innerText = this.current;
    }
  }
}
