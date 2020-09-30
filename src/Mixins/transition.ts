enum TransitionVariantsEnum {
  standard =  "cubic-bezier(0.4, 0.0, 0.2, 1);",
  decelerated = "cubic-bezier(0.0, 0.0, 0.2, 1);",
  accelerated = "cubic-bezier(0.4, 0.0, 1, 1);",
}

const transition = (property: string[] = ["all"], durationInMs = 750, variant = TransitionVariantsEnum.standard): string =>
  `
  transition-property: ${property.join(" ")};
  transition-duration: ${durationInMs}ms;
  transition-timing-function: ${TransitionVariantsEnum[variant]};
  will-change: ${property.join(",")};
  `;

export default transition;
