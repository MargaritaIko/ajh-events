import img from '../img/goblin.png';

export default class goblinGame {
  constructor() {
    this.position = 1;
    this.field = 0;
    this.boarSize = 1;
  }

  goblinSetter() {
    let position = Math.ceil((Math.random() * this.position ** 2) - 1);
    if (position === this.lastPosition) {
      position = this.rand();
    }
    this.lastPosition = position;
    return position;
  }

  boardGeneration(countOfCells) {
    this.boarSize = countOfCells;
    this.field = document.createElement('div');
    this.field.classList.add('board');
    const width = 122 * countOfCells;
    this.field.style.width = `${width}px`;
    document.body.appendChild(this.field);
    for (let i = 0; i < countOfCells ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.field.appendChild(cell);
    }
  }

  imgCreate(interval) {
    const goblin = document.createElement('img');
    goblin.setAttribute('src', '../img/goblin.png');
    setInterval(() => {
      const position = this.goblinSetter();
      this.field.childNodes[position].appendChild(goblin);
    }, interval);
  }
}