declare type ROOT = Element | null;
declare type ROOT_MARGIN = string;
declare const useIntersection: (root?: ROOT, rootMargin?: ROOT_MARGIN) => {
    isIntersecting: boolean;
    ref: React.MutableRefObject<HTMLDivElement>;
    intersectionRatio: number;
};
export default useIntersection;
