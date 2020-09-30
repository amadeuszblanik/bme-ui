const hexToRGBA = (value: string, opacity = 1): string => {
  const hex = value.replace(/#/g, '');
  const rgb = parseInt(hex, 16);

  const red = (rgb >> 16) & 0xff;
  const green = (rgb >> 8) & 0xff;
  const blue = (rgb >> 0) & 0xff;

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

export default hexToRGBA;
