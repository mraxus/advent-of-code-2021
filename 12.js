const { runIfMain } = require('./lib');

const input = `by-TW
start-TW
fw-end
QZ-end
JH-by
ka-start
ka-by
end-JH
QZ-cv
vg-TI
by-fw
QZ-by
JH-ka
JH-vg
vg-fw
TW-cv
QZ-vg
ka-TW
ka-QZ
JH-fw
vg-hu
cv-start
by-cv
ka-cv`;

const getG = (input) => {
  const G = {
    start: { name: 'start', start: true, n: [] },
    end: { name: 'end', end: true, n: [] },
  };
  const getNode = (name) => {
    if (!G[name]) {
      G[name] = {
        name,
        big: name === name.toUpperCase(),
        n: [],
      };
    }
    return G[name];
  };

  G.findPaths = (name, smallTwice, path = '', allPaths = {}, visited = {}) => {
    path += (path ? '-' : '') + name;

    if (allPaths[path]) return 0;
    if (visited[name]) return 0;

    visited = { ...visited };
    allPaths[path] = true;

    const node = G[name];
    if (node.end) return 1;
    if (!node.big) {
      if (name === smallTwice) {
        if (visited[name] === 0) {
          visited[name] = true;
        } else {
          visited[name] = 0;
        }
      } else {
        visited[name] = true;
      }
    }

    return node.n.reduce(
      (sum, { name }) => sum + G.findPaths(name, smallTwice, path, allPaths, visited),
      0
    );
  };

  input
    .split('\n')
    .map((line) => line.split('-'))
    .forEach(([a, b]) => {
      const aN = getNode(a);
      const bN = getNode(b);

      if (b !== 'start') aN.n.push(bN);
      if (a !== 'start') bN.n.push(aN);
    });

  return G;
};

function part1(input) {
  const G = getG(input);
  const allPaths = {};

  return G.findPaths('start', '', '', allPaths);
}

function part2(input) {
  const G = getG(input);
  const smallCaves = Object.keys(G).filter(
    (name) => name !== 'start' && name !== 'end' && name === name.toLowerCase()
  );

  const allResults = [
    ...new Set(
      smallCaves
        .map((smallCave) => {
          const allPaths = {};

          G.findPaths('start', smallCave, '', allPaths);

          return Object.keys(allPaths).filter((path) => path.endsWith('end'));
        })
        .flat()
    ),
  ];

  return allResults.length;
}

part1.desc = 'All paths';
part1.tests = [
  {
    input: `start-A
start-b
A-c
A-b
b-d
A-end
b-end`,
    result: 10,
  },
  {
    input: `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`,
    result: 19,
  },
  {
    input: `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`,
    result: 226,
  },
];

part2.desc = 'Enter one small cave twice';
part2.tests = [36, 103, 3509];

runIfMain(module, input, part1, part2);

module.exports = {
  part1,
  part2,
};
