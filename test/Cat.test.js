const { Cat } = require('../Cat');

let testCat;
let otherCat;

beforeEach(() => {
  testCat = new Cat('A', 'orange', 3, 8, [1, 1]);
  otherCat = new Cat('B', 'brown', 5, 9);
});

describe('Cat Properties', () => {
  test('cat should have a name', () => {
    expect(testCat.name).toEqual('A');
  });

  test('cat cannot have no name', () => {
    function createNamelessCat() {
      return new Cat();
    }
    expect(createNamelessCat).toThrowError();
  });

  test('cat should have a color', () => {
    expect(testCat.color).toEqual('orange');
  });

  test('cat should have an age', () => {
    expect(testCat.age).toEqual(3);
  });

  test('cat should have a weight', () => {
    expect(testCat.weight).toEqual(8);
  });

  test('cat should have a location', () => {
    expect(testCat.location).toEqual([1, 1]);
  });

  test('default location should be 0,0', () => {
    expect(otherCat.location).toEqual([0, 0]);
  });
});

describe('Meow', () => {
  test("meow should describe cat's meow", () => {
    expect(testCat.meow()).toEqual('A says MEOWWW');
  });
});

describe('Hiss', () => {
  test("hiss should describe cat's hiss", () => {
    expect(testCat.hiss()).toEqual('A says SSSSS');
  });
});

describe('Lick', () => {
  test("lick should describe cat's lick", () => {
    expect(testCat.lick(otherCat)).toEqual('A licked B');
  });

  test('cats should be able to lick themselves', () => {
    expect(testCat.lick(testCat)).toEqual('A licked itself');
  });
});

describe('PrintLocation', () => {
  test("printLocation should console.log cat's location", () => {
    console.log = jest.fn();
    testCat.printLocation();
    expect(console.log).toHaveBeenCalledWith("A's Location: 1,1");
  });
});

describe('Move', () => {
  test('move up should increase Y position by 1', () => {
    otherCat.move('up');
    expect(otherCat.location).toEqual([0, 1]);
  });

  test('move down should decrease Y position by 1', () => {
    otherCat.move('down');
    expect(otherCat.location).toEqual([0, -1]);
  });

  test('move left should decrease X position by 1', () => {
    otherCat.move('left');
    expect(otherCat.location).toEqual([-1, 0]);
  });

  test('move right should increase X position by 1', () => {
    otherCat.move('right');
    expect(otherCat.location).toEqual([1, 0]);
  });

  test('multiple movements should compound', () => {
    otherCat.move('right');
    otherCat.move('right');
    otherCat.move('up');
    expect(otherCat.location).toEqual([2, 1]);
  });

  test('invalid directions should throw an error', () => {
    function moveEast() {
      otherCat.move('east');
    }
    expect(moveEast).toThrowError();
  });
});
