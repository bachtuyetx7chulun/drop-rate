import { IRandomParams } from "./interface";

const calculate = (arr: IRandomParams[]): any => {
  let _arrayParser = [] as any;
  let _currentRate = 0;

  // * Check total rate of all params
  const _totalRate = arr.reduce((acc, cur) => acc + cur.rate, 0);
  if (_totalRate !== 100) throw new Error("Total rate must be 100");

  // * Random number
  const _random = Math.random() * _totalRate;

  for (let i = 0; i < arr.length; i++) {
    _currentRate += arr[i].rate;
    _arrayParser.push({ ...arr[i], rate: _currentRate });
  }

  // * Find the index of the random number
  for (let i = 0; i < _arrayParser.length; i++) {
    if (i === 0 && _random <= _arrayParser[i].rate) {
      return arr[i];
    }
    if (_random > _arrayParser[i].rate && _random <= _arrayParser[i + 1].rate) {
      return arr[i + 1];
    }
  }

  return arr[0];
};

export default { calculate };
