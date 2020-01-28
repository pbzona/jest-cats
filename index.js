const { sleep } = require('./utilities');
const { Cat } = require('./Cat');

const bigCat = new Cat('Henny', 'torty', 6, 10, [1, 1]);
const littleCat = new Cat('Violet', 'gray', 0, 3);

// some cat code here
(async function() {
  console.log(
    `${bigCat.name} and ${littleCat.name} just woke up from their naps...`
  );
  await sleep(3000);

  console.log(bigCat.printLocation());
  console.log(littleCat.printLocation());

  await sleep(3000);

  console.log(bigCat.meow());

  await sleep(3000);

  littleCat.move('up');
  littleCat.move('right');

  console.log(littleCat.printLocation());

  await sleep(3000);

  console.log(littleCat.lick(bigCat));

  await sleep(3000);
  console.log(bigCat.hiss());

  bigCat.move('left');
  bigCat.move('left');
  bigCat.move('left');
  bigCat.move('left');
  bigCat.move('left');

  await sleep(3000);
  console.log(bigCat.printLocation());
})();
