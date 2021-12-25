const { Readable } = require('stream');
const readline = require('readline');

const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

async function part1(input) {
  return new Promise((res) => {
    const stringStream = new Readable();
    stringStream.push(input);
    stringStream.push(null);

    const reader = readline.createInterface({
      input: stringStream,
      crlfDelay: Infinity,
    });

    let x = 0;
    let y = 0;

    reader.on('line', (line) => {
      const [dir, mag] = line.split(' ');
      switch (dir) {
        case 'forward':
          x += +mag;
          return;
        case 'up':
          y -= +mag;
          return;
        case 'down':
          y += +mag;
          return;
      }
    });

    reader.on('close', () => {
      res(x * y);
    });

    return 0;
  });
}

part1.desc = 'Dive!';

function part2(input) {
  return 0;
}
part2.desc = '';

if (require.main === module) {
  main().then(() => {});
}

async function main() {
  console.log(`Part 1 (${part1.desc}):`, await part1(input));
  console.log(`Part 2 (${part2.desc}):`, part2(input));
}

module.exports = {
  part1,
  part2,
};
