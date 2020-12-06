import {AlignXValues, AlignYValues} from "../../Mixins/makeFlex";

export const WIDTH_HEIGHT_VALUES = {
  full: '100%',
  half: '50%',
  fullPage: '100vh',
}

export const VALUE_TO_CSS: { [key in AlignXValues | AlignYValues]: string } = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
  left: "flex-start",
  right: "flex-end",
  justify: "space-between",
}
