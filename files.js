import fs from 'fs';

const getMiddleElement = arr => arr[Math.ceil(arr.length / 2)];

const addS = str => (str[str.length - 1] === 's' ? str : `${str}s`);

const main = () => {
  const dir = fs.readdirSync('.');
  return dir
    .filter(el => el[0] !== '.')
    .sort()
    |> getMiddleElement
    |> addS
    |> (_ => _.toUpperCase())
    |> console.log;
};

main();
