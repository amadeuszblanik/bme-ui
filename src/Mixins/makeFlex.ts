import {VALUE_TO_CSS} from "../Components/Box/Box.variants";

export type AlignYValues = "top" | "center" | "bottom" | "justify";
export type AlignXValues = "left" | "center" | "right" | "justify";
export type AlignDirectionValues = "row" | "column";


const makeFlex = (direction: AlignDirectionValues, x: AlignXValues, y: AlignYValues) => {
  const response = [];
  response.push(`flex-direction: ${direction};`);

  switch (direction) {
    case "column": {
      response.push(`align-items: ${VALUE_TO_CSS[x]};`);
      response.push(`justify-content: ${VALUE_TO_CSS[y]};`);
    }
    default: {
      response.push(`align-items: ${VALUE_TO_CSS[y]};`);
      response.push(`justify-content: ${VALUE_TO_CSS[x]};`);
    }
  }

  return response.join('');
}

export default makeFlex;
