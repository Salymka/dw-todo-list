const colors = [
  '#346c74',
  '#6c9da5',
  '#d1d3ac',
  '#3f4a4b',
  '#cc5c38',
  '#a4b4d4',
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function generateColor() {
  return colors[getRandomInt(colors.length)];
}
