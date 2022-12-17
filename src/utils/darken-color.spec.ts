/* eslint-disable no-magic-numbers */
import { describe, expect, test } from "@jest/globals";
import { darkenColor } from "./index";

// @TODO: Add more tests
describe("Utils:: darken color", () => {
  test("#000 darken by default value should be #000", () => {
    expect(darkenColor("#000")).toEqual({ rgb: "rgb(0, 0, 0)", hex: "#000000" });

    expect(darkenColor("rgb(0,0,0)")).toEqual({ rgb: "rgb(0, 0, 0)", hex: "#000000" });
  });

  test("#fff darken by default value should be #e5e5e5", () => {
    expect(darkenColor("#fff")).toEqual({ rgb: "rgb(229, 229, 229)", hex: "#e5e5e5" });

    expect(darkenColor("rgb(255,255,255)")).toEqual({ rgb: "rgb(229, 229, 229)", hex: "#e5e5e5" });
  });

  test("#ffff00 darken by default value should be #e5e500", () => {
    expect(darkenColor("#ffff00")).toEqual({ rgb: "rgb(229, 229, 0)", hex: "#e5e500" });

    expect(darkenColor("rgb(255,255,0)")).toEqual({ rgb: "rgb(229, 229, 0)", hex: "#e5e500" });
  });

  test("#00ff00 darken by 50% should be #7f7f00", () => {
    expect(darkenColor("#ffff00", 0.5)).toEqual({ rgb: "rgb(127, 127, 0)", hex: "#7f7f00" });

    expect(darkenColor("rgb(255,255,0)", 0.5)).toEqual({ rgb: "rgb(127, 127, 0)", hex: "#7f7f00" });
  });

  test("#00ff00 darken by 0% should be #ffff00", () => {
    expect(darkenColor("#ffff00", 0)).toEqual({ rgb: "rgb(255, 255, 0)", hex: "#ffff00" });

    expect(darkenColor("rgb(255,255,0)", 0)).toEqual({ rgb: "rgb(255, 255, 0)", hex: "#ffff00" });
  });

  test("#00ff00 darken by 100% should be #000000", () => {
    expect(darkenColor("#ffff00", 1)).toEqual({ rgb: "rgb(0, 0, 0)", hex: "#000000" });

    expect(darkenColor("rgb(255,255,0)", 1)).toEqual({ rgb: "rgb(0, 0, 0)", hex: "#000000" });
  });
});
