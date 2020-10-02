/// <reference types="react" />
declare type ROOT = Element | null;
declare type ROOT_MARGIN = string;
declare const useIntersection: (root?: ROOT, rootMargin?: ROOT_MARGIN) => {
    isIntersecting: boolean;
    ref: import("react").MutableRefObject<HTMLDivElement>;
    intersectionRatio: number;
};
export default useIntersection;
