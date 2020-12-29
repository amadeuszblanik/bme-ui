const isRealNumber = (value: number): boolean => (typeof value === 'number' ? !isNaN(value) : false);

export default isRealNumber;
