const FIRST_CHAR_INDEX = 0;
const REST_INDEX = 1;

const usePipe = (value: string): string => {
  const firstChar = value.charAt(FIRST_CHAR_INDEX).toUpperCase();
  const restOfValue = value.slice(REST_INDEX).toLowerCase();

  return firstChar + restOfValue;
};
export default usePipe;
