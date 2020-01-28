class Cat {
  constructor(name, color, age, weight, location) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;

    this.location = location || [0, 0];

    if (name == undefined) {
      throw new Error('Every cat deserves to have a name :(');
    }
  }

  meow() {
    return `${this.name} says MEOWWW`;
  }

  hiss() {
    return `${this.name} says SSSSS`;
  }

  lick(target) {
    if (target === this) {
      return `${this.name} licked itself`;
    }
    return `${this.name} licked ${target.name}`;
  }

  printLocation() {
    return console.log(`${this.name}'s Location: ${this.location}`);
  }

  move(direction) {
    switch (direction) {
      case 'left':
        this.location = [this.location[0] - 1, this.location[1]];
        break;
      case 'right':
        this.location = [this.location[0] + 1, this.location[1]];
        break;
      case 'up':
        this.location = [this.location[0], this.location[1] + 1];
        break;
      case 'down':
        this.location = [this.location[0], this.location[1] - 1];
        break;
      default:
        throw new Error('INVALID DIRECTION');
    }
  }
}

module.exports = { Cat };
