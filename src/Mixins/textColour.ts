import Thm, {Palette} from "../Theme/Theme";

const textColour = (value: Palette, theme = Thm): string => {
  const hex = value.substring(1);
  const rgb = parseInt(hex, 16);

  const red = (rgb >> 16) & 0xff;
  const green = (rgb >> 8) & 0xff;
  const blue = (rgb >> 0) & 0xff;

  const luma = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  return luma < 40 ? theme.bme.palette.light : theme.bme.palette.dark;
};

export default textColour;
