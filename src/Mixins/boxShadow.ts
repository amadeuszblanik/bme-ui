const boxShadowLevels = [
    '0px 3px 3px 0px rgba(0,0,0,0.33)',
    '0px 3px 5px 0px rgba(0,0,0,0.33)',
    '0px 3px 7px 3px rgba(0,0,0,0.33)',
    '1px 7px 9px 9px rgba(0,0,0,0.33)',
    '1px 7px 9px 9px rgba(0,0,0,0.66)',
];

const boxShadow = (level: 0 | 1 | 2 | 3 | 4 = 0): string => boxShadowLevels[level];

export default boxShadow;
