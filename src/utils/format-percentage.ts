const MULTIPLIER = 100;
const MAX_FRAC_DIGITS = 2;

// FORMAT PERCENTAGE, 2 decimal places only
const utils = (value: number): string =>
  `${+parseFloat(String((value ?? NaN) * MULTIPLIER)).toFixed(MAX_FRAC_DIGITS)}%`;

export default utils;
