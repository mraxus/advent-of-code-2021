const { runIfMain } = require('./lib');

const input = `5,1,4,1,5,1,1,5,4,4,4,4,5,1,2,2,1,3,4,1,1,5,1,5,2,2,2,2,1,4,2,4,3,3,3,3,1,1,1,4,3,4,3,1,2,1,5,1,1,4,3,3,1,5,3,4,1,1,3,5,2,4,1,5,3,3,5,4,2,2,3,2,1,1,4,1,2,4,4,2,1,4,3,3,4,4,5,3,4,5,1,1,3,2,5,1,5,1,1,5,2,1,1,4,3,2,5,2,1,1,4,1,5,5,3,4,1,5,4,5,3,1,1,1,4,5,3,1,1,1,5,3,3,5,1,4,1,1,3,2,4,1,3,1,4,5,5,1,4,4,4,2,2,5,5,5,5,5,1,2,3,1,1,2,2,2,2,4,4,1,5,4,5,2,1,2,5,4,4,3,2,1,5,1,4,5,1,4,3,4,1,3,1,5,5,3,1,1,5,1,1,1,2,1,2,2,1,4,3,2,4,4,4,3,1,1,1,5,5,5,3,2,5,2,1,1,5,4,1,2,1,1,1,1,1,2,1,1,4,2,1,3,4,2,3,1,2,2,3,3,4,3,5,4,1,3,1,1,1,2,5,2,4,5,2,3,3,2,1,2,1,1,2,5,3,1,5,2,2,5,1,3,3,2,5,1,3,1,1,3,1,1,2,2,2,3,1,1,4,2`;

function fishAfterDays(input, days) {
  const fishes = input
    .split(',')
    .filter(Boolean)
    .map(Number)
    .reduce(
      (pool, fishTimer) => {
        pool[fishTimer] += 1;

        return pool;
      },
      [...new Array(9)].map(() => 0)
    );

  for (let day = 1; day <= days; day += 1) {
    const breedingFish = fishes[0];
    for (let timer = 0; timer <= 8; timer += 1) {
      fishes[timer - 1] = fishes[timer];
    }
    fishes[8] = breedingFish;
    fishes[6] += breedingFish;
  }

  return fishes.reduce((sum, x) => sum + x);
}

function part1(input) {
  return fishAfterDays(input, 80);
}

function part2(input) {
  return fishAfterDays(input, 256);
}

part1.desc = '80 days lanternfish count';
part1.tests = [{ input: '3,4,3,1,2', result: 5934 }];

part2.desc = '256 days lanternfish count';
part2.tests = [26984457539];

runIfMain(module, input, part1, part2);

module.exports = {
  part1,
  part2,
};
