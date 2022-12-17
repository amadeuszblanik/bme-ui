import { describe, expect, test } from "@jest/globals";
import { hexToRgb } from "./index";

describe("Utils:: hex to rgb", () => {
  test("#000 should be 0,0,0", () => {
    expect(hexToRgb("#000")).toEqual({ r: 0, g: 0, b: 0, toString: "rgb(0, 0, 0)" });
  });

  test("#000000 should be 0,0,0", () => {
    expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0, toString: "rgb(0, 0, 0)" });
  });

  test("#fff should be 255,255,255", () => {
    expect(hexToRgb("#fff")).toEqual({ r: 255, g: 255, b: 255, toString: "rgb(255, 255, 255)" });
  });

  test("#ffffff should be 255,255,255", () => {
    expect(hexToRgb("#ffffff")).toEqual({ r: 255, g: 255, b: 255, toString: "rgb(255, 255, 255)" });
  });

  test("#00f should be 0,0,255", () => {
    expect(hexToRgb("#00f")).toEqual({ r: 0, g: 0, b: 255, toString: "rgb(0, 0, 255)" });
  });

  test("#007aff should be 0,122,255", () => {
    expect(hexToRgb("#007aff")).toEqual({ r: 0, g: 122, b: 255, toString: "rgb(0, 122, 255)" });
  });

  test("#34c759 should be 52,199,89", () => {
    expect(hexToRgb("#34c759")).toEqual({ r: 52, g: 199, b: 89, toString: "rgb(52, 199, 89)" });
  });

  test("#XXX should throw error", () => {
    try {
      expect(hexToRgb("#XXX")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid hex string");
    }
  });

  test("#XXXXXX should throw error", () => {
    try {
      expect(hexToRgb("#XXXXXX")).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe("Invalid hex string");
    }
  });
});
