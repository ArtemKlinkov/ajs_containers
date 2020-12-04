export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Выбранный персонаж уже есть в команде!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    if (Array.isArray(characters) && characters.length === 0) {
      throw new Error('В качестве аргумента функции должен быть передан массив!');
    }
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return [...this.members];
  }
}
