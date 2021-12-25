# Description

Drop-rate is a package for calculating probabilities through ratios

## Installation

```bash
npm i drop-rate
yarn add drop-rate
```

## Usage

```javascript
import random from 'drop-rate'
const rates = [
  { name: "R", rate: 60 },
  {
    name: "SR",
    rate: 33.5,
  },
  {
    name: "SSR",
    rate: 5,
  },
  {
    name: "LSSR",
    rate: 1,
  },
  {
    name: "UR",
    rate: 0.5,
  }
]

const result = random.calculate(rates)
// {name: "R", rate: 60 }

> Make sure total rate is equal `100` percents

```

## If you want to use more:

```javascript
const rates = [
  { name: "R", rate: 60, other: any },
  {
    name: "SR",
    rate: 33.5,
    other: any,
  },
  ...
]

const result = random.calculate(rates)
// {name: "R", rate: 60, other: any }
```

## Contributing

@Medium_Hieu `https://github.com/bachtuyetx7chulun`

## License

[MIT](https://choosealicense.com/licenses/mit/)
