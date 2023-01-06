const TIME_IN_DAY = 86400000;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;
const MONTHS_IN_YEAR = 12;

const utils = (dateA: Date, dateB: Date): { years: number; months: number; weeks: number; days: number } => {
  const diff = Math.abs(dateA.getTime() - dateB.getTime());
  let daysDiff = Math.floor(diff / TIME_IN_DAY);

  const years = Math.floor(daysDiff / DAYS_IN_MONTH / MONTHS_IN_YEAR);
  daysDiff = daysDiff - years * DAYS_IN_MONTH * MONTHS_IN_YEAR;

  const months = Math.floor(daysDiff / DAYS_IN_MONTH);
  daysDiff = daysDiff - months * DAYS_IN_MONTH;

  const weeks = Math.floor(daysDiff / DAYS_IN_WEEK);
  daysDiff = daysDiff - weeks * DAYS_IN_WEEK;

  const days = daysDiff;

  return { years, months, weeks, days };
};

export default utils;
