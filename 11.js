const { runIfMain } = require('./lib');

const input = `8261344656
7773351175
7527856852
1763614673
8674556743
6853382153
4135852388
2846715522
7477425863
4723888888`;

const NEIGHBOURS = [
  [0, -1], // up
  [1, -1], // up right
  [1, 0], // right
  [1, 1], // down right
  [0, 1], // down
  [-1, 1], // down left
  [-1, 0], // left
  [-1, -1], // up left
];

const getMatrix = (input) => {
  const M = input.split('\n').map((line) => line.split('').map(Number));
  const w = M[0].length;
  const h = M.length;

  M.get = (x, y) => ((M[y] || [])[x] >= 0 ? M[y][x] : 99);
  M.zero = (x, y) => (M[y][x] = 0);
  M.inc = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return -1;

    M[y][x] += 1;

    if (M[y][x] === 10) {
      M.energize(x, y);
    }

    return M[y][x];
  };
  M.energize = (x, y) => {
    NEIGHBOURS.forEach(([x1, y1]) => M.inc(x + x1, y + y1));
  };
  M.print = (blinks) =>
    console.log(
      M.map((row) => row.join('')).join('\n') + `\n${blinks ? `${blinks} blinks` : 'No blinks'}`
    );

  M.h = h;
  M.w = w;
  M.size = Object.freeze({ w, h });
  return M;
};

const doStep = (M) => {
  let steps = 0;
  for (let x = 0; x < M.w; x += 1) {
    for (let y = 0; y < M.h; y += 1) {
      M.inc(x, y);
    }
  }
  for (let x = 0; x < M.w; x += 1) {
    for (let y = 0; y < M.h; y += 1) {
      if (M.get(x, y) > 9) {
        steps += 1;
        M.zero(x, y);
      }
    }
  }
  return steps;
};

function part1(input) {
  const M = getMatrix(input);

  let blinks = 0;
  for (let step = 1; step <= 100; step += 1) {
    blinks += doStep(M);
  }

  return blinks;
}

function part2(input) {
  const M = getMatrix(input);
  const totalCount = M.w * M.h;

  let blinks = 0;
  let step = 0
  while (blinks !== totalCount) {
    blinks = doStep(M);
    step += 1;
  }

  return step;
}

part1.desc = 'Number of flashes after 100 steps';
part1.tests = [
  {
    input: `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`,
    result: 1656,
  },
];

part2.desc = 'How many steps until all flashes';
part2.tests = [195];

runIfMain(module, input, part1, part2);

module.exports = {
  part1,
  part2,
};
