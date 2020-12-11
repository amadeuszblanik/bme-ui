export declare type AlignYValues = 'top' | 'center' | 'bottom' | 'justify';
export declare type AlignXValues = 'left' | 'center' | 'right' | 'justify';
export declare type AlignDirectionValues = 'row' | 'column';
declare const makeFlex: (direction: AlignDirectionValues, x: AlignXValues, y: AlignYValues) => string;
export default makeFlex;
