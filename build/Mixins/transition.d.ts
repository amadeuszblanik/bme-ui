declare enum TransitionVariantsEnum {
    standard = "cubic-bezier(0.4, 0.0, 0.2, 1);",
    decelerated = "cubic-bezier(0.0, 0.0, 0.2, 1);",
    accelerated = "cubic-bezier(0.4, 0.0, 1, 1);"
}
declare const transition: (property?: string[], durationInMs?: number, variant?: TransitionVariantsEnum) => string;
export default transition;
