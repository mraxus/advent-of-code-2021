const fs = require('fs');
const path = require('path');
const axios = require('axios').default;

const packagePath = path.join(__dirname, '..', 'package.json');

module.exports = {
  getProblemInput: async (day) =>
    axios
      .get(`https://adventofcode.com/2021/day/${day}/input`, {
        headers: { cookie: `session=${module.exports.getSession()}` },
      })
      .then(({ data }) => data),
  getProblemDetails: async (day) => {
    const { data } = await axios.get(`https://adventofcode.com/2021/day/${day}`, {
      headers: { cookie: `session=${module.exports.getSession()}` },
    });

    const nameRegex = new RegExp(`<h2>--- Day ${day}: (.+) ---</h2>`);
    const authorRegex = new RegExp(/class="user">(.+) <span class="star-count">(\d*)/);

    const name = data.match(nameRegex, 'g')[1];
    const [_, author, stars] = data.match(authorRegex, 'g');

    return {
      name,
      author,
      stars: +(stars || 0),
    };
  },
  getSession: () => {
    const packageWithSession = path.join(__dirname, '..', '..', 'package.json');
    const { secret } = require(packageWithSession);

    return secret;
  },
  runIfMain: (problemModule, input, part1, part2) => {
    if (require.main === problemModule) {
      console.log(`Part 1 (${part1.desc}):`, part1(input));
      const p2 = part2(input);
      if (p2 !== null) {
        console.log(`Part 2 (${part2.desc}):`, p2);
      }
    }
  },
  runTests: (withInput = false) => {
    const problemFiles = fs.readdirSync('.').filter((file) => file.match(/\d\d\.js/));

    problemFiles.forEach((file) => {
      const { part1, part2 } = require(`../${file}`);
      const day = parseInt(file);

      if (!part1 || !part1.tests) return;

      describe(`Day ${day}`, () => {
        [part1, part2].forEach((part, index) => {
          if (!part || !part.tests) return;
          const desc = part.desc ? ` (${part.desc})` : '';
          const inputDesc = withInput ? ` with input "${input}"` : '';

          part.tests.forEach(({ input, result }) => {
            test(`Part ${index + 1}${desc}${inputDesc} to be ${result}`, () => {
              expect(part(input)).toEqual(result);
            });
          });
        });
      });
    });
  },

  createDayFile: (day, input, force = false) => {
    const zeroDay = `${day}`.padStart(2, '0');
    const templateFilename = path.join(__dirname, 'templates', `sync-day.js`);
    const dayFilename = path.join(__dirname, '..', `${zeroDay}.js`);

    if (fs.existsSync(dayFilename)) {
      if (force) {
        fs.unlinkSync(dayFilename);
      } else {
        throw new Error(`Day file ${dayFilename} exists. Remove it manually to overwrite`);
      }
    }

    const content = fs
      .readFileSync(templateFilename)
      .toString()
      .replace('const input = 0;', `const input = \`${input.trim()}\`;`);

    fs.writeFileSync(dayFilename, content);

    return dayFilename;
  },

  getAocPackageDays: () => require(packagePath).aoc.days || [],
  updateAocPackage: (author, days, stars) => {
    const pack = require(packagePath);

    pack.aoc = {
      ...pack.aoc,
      author,
      stars,
      days,
    };
    fs.writeFileSync(packagePath, JSON.stringify(pack, null, '  '));
  },
};
