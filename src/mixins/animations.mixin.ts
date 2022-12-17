import { css } from "styled-components";
import { isEmpty } from "bme-utils";

const DEFAULT_ANIMATION_TIME = 500;
const DEFAULT_ANIMATION_FUNCTION = "cubic-bezier(0.4, 0.0, 0.2, 1)";

const mixin = (propertiesToAnimate: string[], time = DEFAULT_ANIMATION_TIME, func = DEFAULT_ANIMATION_FUNCTION) =>
  isEmpty(propertiesToAnimate)
    ? ""
    : css`
        transition-timing-function: ${func};
        transition-duration: ${time}ms;
        transition-property: ${propertiesToAnimate.join(", ")};
        will-change: ${propertiesToAnimate.join(", ")};
      `;

export default mixin;
